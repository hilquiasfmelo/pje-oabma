import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Container, Content, ContentOptions, FormActions } from './styles'
import { Toast } from '@/lib/react-toastify/toasts'
import { FloppyDisk } from 'phosphor-react'
import { useQuery } from '@tanstack/react-query'
import { API } from '@/lib/axios'
import { AxiosError } from 'axios'

const courtsFormSchema = z.object({
  name: z
    .string()
    .toUpperCase()
    .regex(/^(?=.*[a-zA-Z])\s*\S+$/, {
      message: 'Não é permitido enviar somente números ou espaços em branco.',
    }),
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
    formState: { errors },
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
        message: 'Tribunal com a URL do site cadastrado com sucesso!',
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
          <Text as="strong">URL do tribunal</Text>
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
          <Button type="submit">
            <FloppyDisk style={{ width: '1.5rem', height: '1.5rem' }} />
            Registrar tribunal
          </Button>
        </FormActions>
      </Content>
    </Container>
  )
}
