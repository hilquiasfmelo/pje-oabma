import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Container, Content, FormActions } from './styles'
import { Toast } from '@/lib/react-toastify/toasts'
import { LockKeyOpen } from 'phosphor-react'
import { API } from '@/lib/axios'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const accessFormSchema = z.object({
  code: z.string(),
})

type AccessFormData = z.infer<typeof accessFormSchema>

interface AccessProps {
  code: string
}

export default function States() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AccessFormData>({
    resolver: zodResolver(accessFormSchema),
  })

  const router = useRouter()

  async function handleAccessRestricted(data: AccessFormData) {
    const { code } = data

    try {
      await API.post<AccessProps>('/auth', {
        code,
      })

      await router.push('/states')
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        Toast({
          type: 'error',
          message: String(err.response.data.message),
        })
      }

      Toast({
        type: 'error',
        message: 'Não foi possível obter acesso, tente novamente.',
      })
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Content as="form" onSubmit={handleSubmit(handleAccessRestricted)}>
          <label>
            <Text as="strong">Código de acesso</Text>
            <input
              type="text"
              placeholder="Digite o código de acesso"
              {...register('code')}
              required
            />

            {errors.code &&
              Toast({
                type: 'error',
                message: String(errors.code.message),
              })}
          </label>

          <FormActions>
            <Button type="submit">
              <LockKeyOpen style={{ width: '1.5rem', height: '1.5rem' }} />
              Acessar
            </Button>
          </FormActions>
        </Content>
      </Container>
      <Footer />
    </>
  )
}
