import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Container, Content, SeparationsContent, FormActions } from './styles'
import { Toast } from '@/lib/react-toastify/toasts'
import { API } from '@/lib/axios'
import { AxiosError } from 'axios'
import { Courts } from './courts'
import { FloppyDisk } from 'phosphor-react'
import { useRouter } from 'next/router'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const statesFormSchema = z.object({
  name: z
    .string()
    .toUpperCase()
    .regex(/^[\p{L}\p{M} ]+$/u, {
      message: 'Permitido somente inserir letras.',
    }),
  acronym: z
    .string()
    .toUpperCase()
    .max(2, { message: 'Limite máximo de 02 caracteres.' })
    .regex(/^[\p{L}\p{M} ]+$/u, {
      message: 'Permitido somente inserir letras.',
    }),
})

type StatesFormData = z.infer<typeof statesFormSchema>

export default function States() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<StatesFormData>({
    resolver: zodResolver(statesFormSchema),
  })

  const router = useRouter()

  async function handleCreateStates(data: StatesFormData) {
    const { name, acronym } = data

    try {
      await API.post('/pje/states', {
        name,
        acronym,
      })

      Toast({
        type: 'success',
        message: 'Estado cadastrado com sucesso!',
      })

      reset()

      setTimeout(() => {
        router.reload()
      }, 3000)
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        Toast({
          type: 'error',
          message: String(err.response.data.message),
        })
      }

      Toast({
        type: 'error',
        message: 'Não foi possível cadastrar o estado!',
      })
    }

    reset()
  }

  return (
    <>
      <Header />
      <Container>
        <Content as="form" onSubmit={handleSubmit(handleCreateStates)}>
          <label>
            <Text as="strong">Nome do Estado</Text>
            <input
              type="text"
              placeholder="Digite o nome do estado"
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
            <Text as="strong">Sigla do Estado</Text>
            <input
              type="text"
              placeholder="Digite o nome do estado"
              {...register('acronym')}
              required
            />

            {errors.acronym &&
              Toast({
                type: 'error',
                message: String(errors.acronym.message),
              })}
          </label>

          <FormActions>
            <Button type="submit">
              <FloppyDisk size={20} />
              Registrar estado
            </Button>
          </FormActions>
        </Content>

        <SeparationsContent />

        <Courts />
      </Container>
      <Footer />
    </>
  )
}
