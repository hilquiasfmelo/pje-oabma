import { FloppyDisk, Spinner } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { z } from 'zod'

import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { Toast } from '@/lib/react-toastify/toasts'
import { API } from '@/lib/axios'

import { Container, Content, ContentOptions, FormActions } from './styles'

const courtsFormSchema = z.object({
  name: z.string().toUpperCase(),
  url: z.string(),
  stateId: z.string().uuid(),
})

type CourtsFormData = z.infer<typeof courtsFormSchema>

interface StatesProps {
  id: string
  name: string
}

export function Courts() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CourtsFormData>({
    resolver: zodResolver(courtsFormSchema),
  })

  const id: string = watch('stateId')

  const { data: states } = useQuery<StatesProps[]>(['states'], async () => {
    const response = await API.get('/pje/get-states')

    return response.data
  })

  async function handleCreateCourts(data: CourtsFormData) {
    const { name, url } = data

    try {
      await API.post(`/pje/${id}/courts`, {
        name,
        url,
        stateId: id,
      })

      Toast({
        type: 'success',
        message: 'Tribunal e url cadastrado com sucesso!',
      })
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        Toast({
          type: 'error',
          message: String(err.response.data.message),
        })
      }

      Toast({
        type: 'error',
        message: 'Não foi possível cadastrar, tente novamente mais tarde!',
      })
    }

    reset()
  }

  return (
    <Container>
      <Content as="form" onSubmit={handleSubmit(handleCreateCourts)}>
        <ContentOptions>
          <Text as="strong">Escolha um estado</Text>
          <select {...register('stateId')} defaultValue="" required>
            <option disabled value="">
              Selecione um estado...
            </option>
            {states?.map((state) => {
              return (
                <option key={state.id} value={state.id}>
                  {state.name}
                </option>
              )
            })}
          </select>
        </ContentOptions>

        <label>
          <Text as="strong">Nome do Tribunal</Text>
          <input
            type="text"
            placeholder="Digite o nome do tribunal"
            {...register('name')}
            required
          />

          {errors.name &&
            Toast({
              type: 'error',
              message: String(errors.name.message),
            })}
        </label>

        <label>
          <Text as="strong">URL do Tribunal</Text>
          <input
            type="text"
            placeholder="Digite a url do site do tribunal"
            {...register('url')}
            required
          />

          {errors.url &&
            Toast({
              type: 'error',
              message: String(errors.url.message),
            })}
        </label>

        <FormActions>
          {isSubmitting ? (
            <Button variant="spinner">
              <Spinner size={20} />
              Salvando
            </Button>
          ) : (
            <Button type="submit">
              <FloppyDisk size={20} />
              Registrar tribunal
            </Button>
          )}
        </FormActions>
      </Content>
    </Container>
  )
}
