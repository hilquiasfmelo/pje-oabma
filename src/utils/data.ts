export interface Court {
  name: string
  url: string
}

export interface State {
  id: string
  name: string
  sigla: string
  courts: Court[]
}

export const statesData: State[] = [
  {
    id: '1',
    name: 'MARANHÃO',
    sigla: 'MA',
    courts: [
      {
        name: 'JUSTIÇA ELEITORAL',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/processo-judicial-eletronico/processo-judicial-eletronico-1',
      },
      {
        name: 'TJMA 1° GRAU',
        url: 'https://pje.tjma.jus.br/pje/login.seam',
      },
      {
        name: 'TJMA 2° GRAU',
        url: 'https://pje2.tjma.jus.br/pje2g/login.seam',
      },
      {
        name: 'TRF 1ª REGIÃO - 1° GRAU',
        url: 'https://pje1g.trf1.jus.br/pje-web/login.seam',
      },
      {
        name: 'TRF 1ª REGIÃO - 2° GRAU',
        url: 'https://pje2g.trf1.jus.br/pje-web/login.seam',
      },
      {
        name: 'TRT 16 - 1º GRAU',
        url: 'https://pje.trt16.jus.br/primeirograu/authenticateSSO.seam',
      },
      {
        name: 'TRT 16 - 2º GRAU',
        url: 'https://pje.trt16.jus.br/segundograu/authenticateSSO.seam',
      },
    ],
  },
]
