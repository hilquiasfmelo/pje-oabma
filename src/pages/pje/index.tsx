import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import { API } from '@/lib/axios'

import pjeLogo from '@/assets/pje-oabma.png'

import { Text } from '@/components/Text'
import { Button } from '@/components/Button'
import { Container, Content, Header, ContentOptions } from './styles'
import { Toast } from '@/lib/react-toastify/toasts'
import { Link } from 'phosphor-react'

interface StatesProps {
  id: string
  name: string
  acronym: string
}

interface CourtsProps {
  id: string
  name: string
  url: string
}

export function Pje() {
  const { register, watch } = useForm()
  const [courts, setCourts] = useState<CourtsProps[]>([])

  const stateId: string = watch('stateId')
  const url: string = watch('url')

  const { data: states } = useQuery<StatesProps[]>(['states'], async () => {
    const response = await API.get('/pje/get-states')

    return response.data
  })

  useEffect(() => {
    if (stateId) {
      const getCourts = async () => {
        const response = await API.get<CourtsProps[]>(
          `/pje/${stateId}/get-courts`,
        )

        setCourts(response.data)
      }

      getCourts()
    }
  }, [stateId])

  async function handleAccessTribunal() {
    if (stateId === '' || url === '') {
      Toast({
        type: 'error',
        message: 'Por favor! Selecione um Estado e um Tribunal.',
      })

      return
    }

    window.open(url, '_blank')
  }

  return (
    <Container>
      <Header>
        <Image
          src={pjeLogo}
          width={140}
          height={120}
          priority
          quality={100}
          alt="Logo do Direito"
        />
        <Text as="strong" size="5xl">
          O PJE está disponível em todo o Brasil, fique a vontade para usá-lo em
          qualquer estado!
        </Text>
      </Header>

      <Content>
        <Text as="span" size="2xl">
          Escolha qual <strong>Estado</strong> e <strong>Tribunal</strong> você
          deseja acessar:
        </Text>
        <ContentOptions>
          <select {...register('stateId')} defaultValue="">
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

          <select {...register('url')} defaultValue="">
            <option>Defina o tribunal...</option>
            {courts.map((court) => {
              return (
                <option key={court.id} value={court.url}>
                  {court.name}
                </option>
              )
            })}
          </select>
        </ContentOptions>
        <Button type="button" onClick={handleAccessTribunal}>
          <Link style={{ width: '1.5rem', height: '1.5rem' }} />
          Acessar tribunal
        </Button>
      </Content>
    </Container>
  )
}
