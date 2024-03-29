import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LockKeyOpen, Spinner } from 'phosphor-react'
import { AxiosError } from 'axios'
import { z } from 'zod'

import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { Toast } from '@/lib/react-toastify/toasts'
import { API } from '@/lib/axios'

import { Container, Content, FormActions } from './styles'
import { NextSeo } from 'next-seo'
import { AnimationContainer } from '@/styles/animation'

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

    formState: { errors, isSubmitting },
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
      <NextSeo title="Acesso Restrito | Pje OAB-MA" noindex />

      <Container>
        <AnimationContainer>
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
              {isSubmitting ? (
                <Button variant="spinner">
                  <Spinner size={20} />
                  Carregando
                </Button>
              ) : (
                <Button type="submit">
                  <LockKeyOpen size={20} />
                  Acessar
                </Button>
              )}
            </FormActions>
          </Content>
        </AnimationContainer>
      </Container>
    </>
  )
}
