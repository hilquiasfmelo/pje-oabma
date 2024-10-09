import { useForm, Controller } from 'react-hook-form'
import Image from 'next/image'
import { Globe } from 'phosphor-react'

import { Text } from '@/components/Text'
import { Button } from '@/components/Button'
// import { Toast } from '@/lib/react-toastify/toasts'

import { statesData, Court } from '../../utils/data'

import pjeLogo from '@/assets/pje-oabma.png'

import { Container, Content, Header, ContentOptions } from './styles.static'
import { useState } from 'react'
import { Toast } from '@/lib/react-toastify/toasts'
import { sortStatesAlphabetically } from '@/utils/sortStatesAlphabetically'

interface PjeFormData {
  stateId: string
  courtUrl: string
}

export function Pje() {
  const { control, setValue, watch } = useForm<PjeFormData>()
  const [courts, setCourts] = useState<Court[]>([])

  const stateId: string = watch('stateId')
  const url: string = watch('courtUrl')

  const handleStateChange = (selectedStateId: string) => {
    setValue('stateId', selectedStateId)
    const selectedState = statesData.find(
      (state) => state.id === selectedStateId,
    )
    if (selectedState) {
      setCourts(selectedState.courts)
      setValue('courtUrl', '') // Reset the selected court when changing the state
    }
  }

  async function handleAccessTribunal() {
    if (!stateId || !url) {
      Toast({
        type: 'error',
        message: 'Por favor, selecione um estado e tribunal.',
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
          width={120}
          height={100}
          priority
          quality={100}
          alt="Logo do Direito"
        />
        <Text as="strong">
          O PJE está disponível em todo o Brasil, fique a vontade para usá-lo em
          qualquer estado!
        </Text>
      </Header>

      <Content>
        <Text as="span" size="lg">
          Escolha qual <strong>Estado</strong> e <strong>Tribunal</strong> você
          deseja acessar:
        </Text>
        <ContentOptions>
          <Controller
            name="stateId"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select
                {...field}
                onChange={(e) => handleStateChange(e.target.value)}
              >
                <option value="">Selecione um estado...</option>
                {sortStatesAlphabetically(statesData).map((state) => (
                  <option key={state.id} value={state.id}>
                    {state.name}
                  </option>
                ))}
              </select>
            )}
          />

          <Controller
            name="courtUrl"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select {...field} disabled={!stateId}>
                <option value="">Selecione um tribunal...</option>
                {courts.map((court) => (
                  <option key={court.url} value={court.url}>
                    {court.name}
                  </option>
                ))}
              </select>
            )}
          />
        </ContentOptions>

        <Button type="button" onClick={handleAccessTribunal}>
          <Globe size={20} />
          Acessar tribunal
        </Button>
      </Content>
    </Container>
  )
}
