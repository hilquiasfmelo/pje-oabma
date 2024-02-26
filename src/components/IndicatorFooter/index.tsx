import { ArrowFatLineDown } from 'phosphor-react'
import Tooltip from '@mui/material/Tooltip'

import { Container } from './styles'

export function IndicatorFooter() {
  return (
    <Tooltip title="📥 Downloads" placement="top" arrow>
      <Container>
        <a href="#footer">
          <strong>Suporte</strong>
          <ArrowFatLineDown weight="duotone" />
        </a>
      </Container>
    </Tooltip>
  )
}
