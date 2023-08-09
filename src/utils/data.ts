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
        url: 'https://pje1g.trf1.jus.br/pje/login.seam',
      },
      {
        name: 'TRF 1ª REGIÃO - 2° GRAU',
        url: 'https://pje2g.trf1.jus.br/pje/login.seam',
      },
      {
        name: 'TRT 16 - 1º GRAU',
        url: 'https://pje.trt16.jus.br/primeirograu/login.seam',
      },
      {
        name: 'TRT 16 - 2º GRAU',
        url: 'https://pje.trt16.jus.br/segundograu/authenticateSSO.seam',
      },
    ],
  },
  {
    id: '2',
    name: 'ACRE',
    sigla: 'AC',
    courts: [
      {
        name: 'JUSTIÇA ELEITORAL',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/processo-judicial-eletronico/processo-judicial-eletronico-1',
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
        name: 'TRT 14 - 1º GRAU',
        url: 'https://pje.trt14.jus.br/primeirograu/login.seam',
      },
      {
        name: 'TRT 14 - 2º GRAU',
        url: 'https://pje.trt14.jus.br/segundograu/login.seam',
      },
    ],
  },
  {
    id: '3',
    name: 'ALAGOAS',
    sigla: 'AL',
    courts: [
      {
        name: 'JUSTIÇA ELEITORAL',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/processo-judicial-eletronico/processo-judicial-eletronico-1',
      },
      {
        name: 'TRF 5ª REGIÃO - 1° GRAU',
        url: 'https://pje.jfal.jus.br/pje/login.seam',
      },
      {
        name: 'TRF 5ª REGIÃO - 2° GRAU',
        url: 'https://pje.trf5.jus.br/pje/login.seam',
      },
      {
        name: 'TRF 5ª REGIÃO - JEF',
        url: 'https://pje1g.trf5.jus.br/pje/login.seam',
      },
      {
        name: 'TRF 5ª REGIÃO - TR',
        url: 'https://pje2g.trf5.jus.br/pje/login.seam',
      },
      {
        name: 'TRF 19ª REGIÃO - 1° GRAU',
        url: 'https://pje.trt19.jus.br/primeirograu/login.seam',
      },
      {
        name: 'TRF 19ª REGIÃO - 2° GRAU',
        url: 'https://pje.trt19.jus.br/segundograu/login.seam',
      },
    ],
  },
  {
    id: '4',
    name: 'AMAZONAS',
    sigla: 'AM',
    courts: [
      {
        name: 'JUSTIÇA ELEITORAL',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/processo-judicial-eletronico/processo-judicial-eletronico-1',
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
        name: 'TRF 11ª REGIÃO - 1° GRAU',
        url: 'https://pje.trt11.jus.br/primeirograu/login.seam',
      },
      {
        name: 'TRF 11ª REGIÃO - 2° GRAU',
        url: 'https://pje.trt11.jus.br/segundograu/login.seam',
      },
    ],
  },
  {
    id: '5',
    name: 'AMAPÁ',
    sigla: 'AP',
    courts: [
      {
        name: 'JUSTIÇA ELEITORAL',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/processo-judicial-eletronico/processo-judicial-eletronico-1',
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
        name: 'TRF 8ª REGIÃO - 1° GRAU',
        url: 'https://pje.trt8.jus.br/primeirograu/login.seam',
      },
      {
        name: 'TRF 8ª REGIÃO - 2° GRAU',
        url: 'https://pje.trt8.jus.br/segundograu/login.seam',
      },
    ],
  },
  {
    id: '6',
    name: 'BAHIA',
    sigla: 'BA',
    courts: [
      {
        name: 'TJBA 1° GRAU',
        url: 'https://pje.tjba.jus.br/pje/login.seam',
      },
      {
        name: 'TJBA 2° GRAU',
        url: 'https://pje2g.tjba.jus.br/pje/login.seam',
      },
      {
        name: 'JUSTIÇA ELEITORAL',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/processo-judicial-eletronico/processo-judicial-eletronico-1',
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
        name: 'TRF 5ª REGIÃO - 1° GRAU',
        url: 'https://pje.trt5.jus.br/primeirograu/login.seam',
      },
      {
        name: 'TRF 5ª REGIÃO - 2° GRAU',
        url: 'https://pje.trt5.jus.br/segundograu/login.seam',
      },
    ],
  },
  {
    id: '7',
    name: 'CEARÁ',
    sigla: 'CE',
    courts: [
      {
        name: 'TJCE 1° GRAU',
        url: 'https://pje.tjce.jus.br/pje1grau/login.seam',
      },
      {
        name: 'TJCE 2° GRAU',
        url: 'https://pje.tjce.jus.br/pje2grau/login.seam',
      },
      {
        name: 'JUSTIÇA ELEITORAL',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/processo-judicial-eletronico/processo-judicial-eletronico-1',
      },
      {
        name: 'TRF 5ª REGIÃO - 1° GRAU',
        url: 'https://pje.jfal.jus.br/pje/login.seam',
      },
      {
        name: 'TRF 5ª REGIÃO - 2° GRAU',
        url: 'https://pje.trf5.jus.br/pje/login.seam',
      },
      {
        name: 'TRF 5ª REGIÃO - JEF',
        url: 'https://pje1g.trf5.jus.br/pje/login.seam',
      },
      {
        name: 'TRF 5ª REGIÃO - TR',
        url: 'https://pje2g.trf5.jus.br/pje/login.seam',
      },
      {
        name: 'TRT 7 - 1° GRAU',
        url: 'https://pje.trt7.jus.br/primeirograu/login.seam',
      },
      {
        name: 'TRF 7 - 2° GRAU',
        url: 'https://pje.trt7.jus.br/segundograu/login.seam',
      },
    ],
  },
  {
    id: '8',
    name: 'DISTRITO FEDERAL',
    sigla: 'DF',
    courts: [
      {
        name: 'JUSTIÇA ELEITORAL',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/processo-judicial-eletronico/processo-judicial-eletronico-1',
      },
      {
        name: 'TST',
        url: 'https://pje.tst.jus.br/tst/login.seam',
      },
      {
        name: 'CNJ',
        url: 'https://www.cnj.jus.br/pjecnj/login.seam',
      },
      {
        name: 'CJF (TNU)',
        url: 'https://www2.cjf.jus.br/pje/login.seam',
      },
      {
        name: 'TJDFT 1° GRAU',
        url: 'https://pje.tjdft.jus.br/pje/login.seam',
      },
      {
        name: 'TJDFT 2° GRAU',
        url: 'https://pje2i.tjdft.jus.br/pje/login.seam',
      },
      {
        name: 'TRF 1ª REGIÃO - 1° GRAU',
        url: 'https://pje1g.trf1.jus.br/pje/login.seam',
      },
      {
        name: 'TRF 1ª REGIÃO - 2° GRAU',
        url: 'https://pje2g.trf1.jus.br/pje/login.seam',
      },
      {
        name: 'TRF 10 - 1° GRAU',
        url: 'https://pje.trt10.jus.br/primeirograu/login.seam',
      },
      {
        name: 'TRF 10 - 2° GRAU',
        url: 'https://pje.trt10.jus.br/segundograu/login.seam',
      },
    ],
  },
  {
    id: '9',
    name: 'ESPÍRITO SANTO',
    sigla: 'ES',
    courts: [
      {
        name: 'JUSTIÇA ELEITORAL',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/processo-judicial-eletronico/processo-judicial-eletronico-1',
      },
      {
        name: 'TJES 1° GRAU',
        url: 'https://pje.tjes.jus.br/pje/login.seam',
      },
      {
        name: 'TJES - TURMA RECURSAL',
        url: 'https://pje.tjes.jus.br/pje2g/login.seam',
      },
      {
        name: 'TRT 17 - 1° GRAU',
        url: 'https://pje.trt17.jus.br/primeirograu/login.seam',
      },
      {
        name: 'TRT 17 - 2° GRAU',
        url: 'https://pje.trt17.jus.br/segundograu/login.seam',
      },
      {
        name: 'TRF 1ª REGIÃO - 2° GRAU',
        url: 'https://pje2g.trf1.jus.br/pje/login.seam',
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
  {
    id: '10',
    name: 'GOIÁS',
    sigla: 'GO',
    courts: [
      {
        name: 'JUSTIÇA ELEITORAL',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/processo-judicial-eletronico/processo-judicial-eletronico-1',
      },
      {
        name: 'TRF 1ª REGIÃO - 1° GRAU',
        url: 'https://pje1g.trf1.jus.br/pje/login.seam',
      },
      {
        name: 'TRF 1ª REGIÃO - 2° GRAU',
        url: 'https://pje2g.trf1.jus.br/pje/login.seam',
      },
      {
        name: 'TRT 18 - 1º GRAU',
        url: 'https://pje.trt18.jus.br/primeirograu/login.seam',
      },
      {
        name: 'TRT 18 - 2º GRAU',
        url: 'https://pje.trt18.jus.br/segundograu/login.seam',
      },
    ],
  },
  {
    id: '11',
    name: 'MATO GROSSO',
    sigla: 'MT',
    courts: [
      {
        name: 'JUSTIÇA ELEITORAL',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/processo-judicial-eletronico/processo-judicial-eletronico-1',
      },
      {
        name: 'TJMT 1° GRAU',
        url: 'https://pje.tjmt.jus.br/pje/login.seam',
      },
      {
        name: 'TJMT 2° GRAU',
        url: 'https://pje2.tjmt.jus.br/pje2/login.seam',
      },
      {
        name: 'TRF 1ª REGIÃO - 1° GRAU',
        url: 'https://pje1g.trf1.jus.br/pje/login.seam',
      },
      {
        name: 'TRF 1ª REGIÃO - 2° GRAU',
        url: 'https://pje2g.trf1.jus.br/pje/login.seam',
      },
      {
        name: 'TRT 23 - 1º GRAU',
        url: 'https://pje.trt23.jus.br/primeirograu/login.seam',
      },
      {
        name: 'TRT 23 - 2º GRAU',
        url: 'https://pje.trt23.jus.br/segundograu/login.seam',
      },
    ],
  },
  {
    id: '12',
    name: 'MATO GROSSO DO SUL',
    sigla: 'MS',
    courts: [
      {
        name: 'JUSTIÇA ELEITORAL',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/processo-judicial-eletronico/processo-judicial-eletronico-1',
      },
      {
        name: 'TRF 3ª REGIÃO - 1° GRAU',
        url: 'https://pje1g.trf3.jus.br/pje/login.seam',
      },
      {
        name: 'TRF 3ª REGIÃO - 2° GRAU',
        url: 'https://pje2g.trf3.jus.br/pje/login.seam',
      },
      {
        name: 'TRT 24 - 1º GRAU',
        url: 'https://pje.trt24.jus.br/primeirograu/login.seam',
      },
      {
        name: 'TRT 24 - 2º GRAU',
        url: 'https://pje.trt24.jus.br/segundograu/login.seam',
      },
    ],
  },
  {
    id: '13',
    name: 'MINAS GERAIS',
    sigla: 'MG',
    courts: [
      {
        name: 'TJMG 1° GRAU',
        url: 'https://pje.tjmg.jus.br/pje/login.seam',
      },
      {
        name: 'TJMG RECURSAL',
        url: 'https://pjerecursal.tjmg.jus.br/pje/login.seam',
      },
      {
        name: 'JUSTIÇA ELEITORAL',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/processo-judicial-eletronico/processo-judicial-eletronico-1',
      },
      {
        name: 'TRF 1ª REGIÃO - 1° GRAU',
        url: 'https://pje1g.trf1.jus.br/pje/login.seam',
      },
      {
        name: 'TRF 1ª REGIÃO - 2° GRAU',
        url: 'https://pje2g.trf1.jus.br/pje/login.seam',
      },
      {
        name: 'TRT 3 - 1º GRAU',
        url: 'https://pje.trt3.jus.br/primeirograu/login.seam',
      },
      {
        name: 'TRT 3 - 2º GRAU',
        url: 'https://pje.trt3.jus.br/segundograu/login.seam',
      },
    ],
  },
  {
    id: '14',
    name: 'PARÁ',
    sigla: 'PA',
    courts: [
      {
        name: 'TJPA 1° GRAU',
        url: 'https://pje.tjpa.jus.br/pje/login.seam',
      },
      {
        name: 'TJPA 2° GRAU',
        url: 'https://pje.tjpa.jus.br/pje-2g/login.seam',
      },
      {
        name: 'JUSTIÇA ELEITORAL',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/processo-judicial-eletronico/processo-judicial-eletronico-1',
      },
      {
        name: 'TRF 1ª REGIÃO - 1° GRAU',
        url: 'https://pje1g.trf1.jus.br/pje/login.seam',
      },
      {
        name: 'TRF 1ª REGIÃO - 2° GRAU',
        url: 'https://pje2g.trf1.jus.br/pje/login.seam',
      },
      {
        name: 'TRT 8 - 1º GRAU',
        url: 'https://pje.trt8.jus.br/primeirograu/login.seam',
      },
      {
        name: 'TRT 8 - 2º GRAU',
        url: 'https://pje.trt8.jus.br/segundograu/login.seam',
      },
    ],
  },
  {
    id: '15',
    name: 'PARAÍBA',
    sigla: 'PB',
    courts: [
      {
        name: 'TJPB - CORREGEDORIA',
        url: 'https://pje.tjpb.jus.br/pje-corregedoria/login.seam',
      },
      {
        name: 'TJPB 1° GRAU',
        url: 'https://pje.tjpb.jus.br/pje/login.seam',
      },
      {
        name: 'TJPB 2° GRAU',
        url: 'https://pjesg.tjpb.jus.br/pje2g/login.seam',
      },
      {
        name: 'JUSTIÇA ELEITORAL',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/processo-judicial-eletronico/processo-judicial-eletronico-1',
      },
      {
        name: 'TRF 5ª REGIÃO - 1° GRAU',
        url: 'https://pje.jfal.jus.br/pje/login.seam',
      },
      {
        name: 'TRF 5ª REGIÃO - 2° GRAU',
        url: 'https://pje.trf5.jus.br/pje/login.seam',
      },
      {
        name: 'TRT 13 - 1º GRAU',
        url: 'https://pje.trt13.jus.br/primeirograu/login.seam',
      },
      {
        name: 'TRT 13 - 2º GRAU',
        url: 'https://pje.trt13.jus.br/segundograu/login.seam',
      },
    ],
  },
  {
    id: '16',
    name: 'PARANÁ',
    sigla: 'PR',
    courts: [
      {
        name: 'JUSTIÇA ELEITORAL',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/processo-judicial-eletronico/processo-judicial-eletronico-1',
      },
      {
        name: 'TRT 9 - 1º GRAU',
        url: 'https://pje.trt9.jus.br/primeirograu/login.seam',
      },
      {
        name: 'TRT 9 - 2º GRAU',
        url: 'https://pje.trt9.jus.br/segundograu/login.seam',
      },
    ],
  },
  {
    id: '17',
    name: 'PERNAMBUCO',
    sigla: 'PE',
    courts: [
      {
        name: 'TJPE - CORREGEDORIA',
        url: 'https://pje.tjpe.jus.br/cgj/login.seam',
      },
      {
        name: 'TJPE 1° GRAU',
        url: 'https://pje.tjpe.jus.br/2g/login.seam',
      },
      {
        name: 'TJPE 2° GRAU',
        url: 'https://pje.tjpe.jus.br/cgj/login.seam',
      },
      {
        name: 'JUSTIÇA ELEITORAL',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/processo-judicial-eletronico/processo-judicial-eletronico-1',
      },
      {
        name: 'TRF 5ª REGIÃO - 1° GRAU',
        url: 'https://pje.jfal.jus.br/pje/login.seam',
      },
      {
        name: 'TRF 5ª REGIÃO - 2° GRAU',
        url: 'https://pje.trf5.jus.br/pje/login.seam',
      },
      {
        name: 'TRF 5ª REGIÃO - JEF',
        url: 'https://pje1g.trf5.jus.br/pje/login.seam',
      },
      {
        name: 'TRF 5ª REGIÃO - TR',
        url: 'https://pje2g.trf5.jus.br/pje/login.seam',
      },
      {
        name: 'TRT 6 - 1º GRAU',
        url: 'https://pje.trt6.jus.br/primeirograu/login.seam',
      },
      {
        name: 'TRT 6 - 2º GRAU',
        url: 'https://pje.trt6.jus.br/segundograu/login.seam',
      },
    ],
  },
  {
    id: '18',
    name: 'PIAUÍ',
    sigla: 'PI',
    courts: [
      {
        name: 'TJPI 1° GRAU',
        url: 'https://tjpi.pje.jus.br/1g/login.seam',
      },
      {
        name: 'TJPI 2° GRAU',
        url: 'https://tjpi.pje.jus.br/2g/login.seam',
      },
      {
        name: 'JUSTIÇA ELEITORAL',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/processo-judicial-eletronico/processo-judicial-eletronico-1',
      },
      {
        name: 'TRF 1ª REGIÃO - 1° GRAU',
        url: 'https://pje1g.trf1.jus.br/pje/login.seam',
      },
      {
        name: 'TRF 1ª REGIÃO - 2° GRAU',
        url: 'https://pje2g.trf1.jus.br/pje/login.seam',
      },
      {
        name: 'TRT 22 - 1º GRAU',
        url: 'https://pje.trt22.jus.br/primeirograu/login.seam',
      },
      {
        name: 'TRT 22 - 2º GRAU',
        url: 'https://pje.trt22.jus.br/segundograu/login.seam',
      },
    ],
  },
  {
    id: '19',
    name: 'RIO DE JANEIRO',
    sigla: 'RJ',
    courts: [
      {
        name: 'TJRJ 1° GRAU',
        url: 'https://tjrj.pje.jus.br/1g/login.seam',
      },
      {
        name: 'JUSTIÇA ELEITORAL',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/processo-judicial-eletronico/processo-judicial-eletronico-1',
      },
      {
        name: 'TRT 1 - 1º GRAU',
        url: 'https://pje.trt1.jus.br/primeirograu/login.seam',
      },
      {
        name: 'TRT 1 - 2º GRAU',
        url: 'https://pje.trt1.jus.br/segundograu/login.seam',
      },
    ],
  },
  {
    id: '20',
    name: 'RIO GRANDE DO NORTE',
    sigla: 'RN',
    courts: [
      {
        name: 'TJRN 1° GRAU',
        url: 'https://pje1g.tjrn.jus.br/pje/login.seam',
      },
      {
        name: 'TJRN 2° GRAU',
        url: 'https://pje2gconsulta.tjrn.jus.br/consultapublica/ConsultaPublica/listView.seam',
      },
      {
        name: 'JUSTIÇA ELEITORAL',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/processo-judicial-eletronico/processo-judicial-eletronico-1',
      },
      {
        name: 'TRF 5ª REGIÃO - 1° GRAU',
        url: 'https://pje.jfal.jus.br/pje/login.seam',
      },
      {
        name: 'TRF 5ª REGIÃO - 2° GRAU',
        url: 'https://pje.trf5.jus.br/pje/login.seam',
      },
      {
        name: 'TRF 5ª REGIÃO - JEF',
        url: 'https://pje1g.trf5.jus.br/pje/login.seam',
      },
      {
        name: 'TRF 5ª REGIÃO - TR',
        url: 'https://pje2g.trf5.jus.br/pje/login.seam',
      },
      {
        name: 'TRT 21 - 1º GRAU',
        url: 'https://pje.trt21.jus.br/primeirograu/login.seam',
      },
      {
        name: 'TRT 21 - 2º GRAU',
        url: 'https://pje.trt21.jus.br/segundograu/login.seam',
      },
    ],
  },
  {
    id: '21',
    name: 'RIO GRANDE DO SUL',
    sigla: 'RS',
    courts: [
      {
        name: 'JUSTIÇA ELEITORAL',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/processo-judicial-eletronico/processo-judicial-eletronico-1',
      },
      {
        name: 'TRT 4 - 1º GRAU',
        url: 'https://pje.trt4.jus.br/primeirograu/login.seam',
      },
      {
        name: 'TRT 4 - 2º GRAU',
        url: 'https://pje.trt4.jus.br/segundograu/login.seam',
      },
    ],
  },
  {
    id: '22',
    name: 'RONDÔNIA',
    sigla: 'RO',
    courts: [
      {
        name: 'TJRO 1° GRAU',
        url: 'https://pjepg.tjro.jus.br/login.seam',
      },
      {
        name: 'TJRO 2° GRAU',
        url: 'https://pjesg.tjro.jus.br/login.seam',
      },
      {
        name: 'JUSTIÇA ELEITORAL',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/processo-judicial-eletronico/processo-judicial-eletronico-1',
      },
      {
        name: 'TRF 1ª REGIÃO - 1° GRAU',
        url: 'https://pje1g.trf1.jus.br/pje/login.seam',
      },
      {
        name: 'TRF 1ª REGIÃO - 2° GRAU',
        url: 'https://pje2g.trf1.jus.br/pje/login.seam',
      },
      {
        name: 'TRT 14 - 1º GRAU',
        url: 'https://pje.trt14.jus.br/primeirograu/login.seam',
      },
      {
        name: 'TRT 14 - 2º GRAU',
        url: 'https://pje.trt14.jus.br/segundograu/login.seam',
      },
    ],
  },
  {
    id: '23',
    name: 'RORAIMA',
    sigla: 'RR',
    courts: [
      {
        name: 'JUSTIÇA ELEITORAL',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/processo-judicial-eletronico/processo-judicial-eletronico-1',
      },
      {
        name: 'TRF 1ª REGIÃO - 1° GRAU',
        url: 'https://pje1g.trf1.jus.br/pje/login.seam',
      },
      {
        name: 'TRF 1ª REGIÃO - 2° GRAU',
        url: 'https://pje2g.trf1.jus.br/pje/login.seam',
      },
      {
        name: 'TRT 11 - 1º GRAU',
        url: 'https://pje.trt11.jus.br/primeirograu/login.seam',
      },
      {
        name: 'TRT 11 - 2º GRAU',
        url: 'https://pje.trt11.jus.br/segundograu/login.seam',
      },
    ],
  },
  {
    id: '24',
    name: 'SANTA CATARINA',
    sigla: 'SC',
    courts: [
      {
        name: 'JUSTIÇA ELEITORAL',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/processo-judicial-eletronico/processo-judicial-eletronico-1',
      },
      {
        name: 'TRT 12 - 1º GRAU',
        url: 'https://pje.trt12.jus.br/primeirograu/login.seam',
      },
      {
        name: 'TRT 12 - 2º GRAU',
        url: 'https://pje.trt12.jus.br/segundograu/login.seam',
      },
    ],
  },
  {
    id: '25',
    name: 'SÃO PAULO',
    sigla: 'SP',
    courts: [
      {
        name: 'TJ MILITAR 1° GRAU',
        url: 'https://pje.tjmsp.jus.br/pje-web/login.seam',
      },
      {
        name: 'TJ MILITAR 2° GRAU',
        url: 'https://pje2grau.tjmsp.jus.br/pje-web/login.seam',
      },
      {
        name: 'JUSTIÇA ELEITORAL',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/processo-judicial-eletronico/processo-judicial-eletronico-1',
      },
      {
        name: 'TRF 3° REGIÃO - 1º GRAU',
        url: 'https://pje1g.trf3.jus.br/pje/login.seam',
      },
      {
        name: 'TRF 3° REGIÃO - 2º GRAU',
        url: 'https://pje2g.trf3.jus.br/pje/login.seam',
      },
      {
        name: 'TRT 2 - 1º GRAU',
        url: 'https://pje.trt2.jus.br/primeirograu/login.seam',
      },
      {
        name: 'TRT 2 - 2º GRAU',
        url: 'https://pje.trt2.jus.br/segundograu/login.seam',
      },
      {
        name: 'TRT 15 - 1º GRAU',
        url: 'https://pje.trt15.jus.br/primeirograu/login.seam',
      },
      {
        name: 'TRT 15 - 2º GRAU',
        url: 'https://pje.trt15.jus.br/segundograu/login.seam',
      },
    ],
  },
  {
    id: '26',
    name: 'SERGIPE',
    sigla: 'SG',
    courts: [
      {
        name: 'JUSTIÇA ELEITORAL',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/processo-judicial-eletronico/processo-judicial-eletronico-1',
      },
      {
        name: 'TRF 5ª REGIÃO - 1° GRAU',
        url: 'https://pje.jfal.jus.br/pje/login.seam',
      },
      {
        name: 'TRF 5ª REGIÃO - 2° GRAU',
        url: 'https://pje.trf5.jus.br/pje/login.seam',
      },
      {
        name: 'TRT 20 - 2º GRAU',
        url: 'https://pje.trt20.jus.br/primeirograu/login.seam',
      },
      {
        name: 'TRT 20 - 2º GRAU',
        url: 'https://pje.trt20.jus.br/segundograu/login.seam',
      },
    ],
  },
  {
    id: '27',
    name: 'TOCANTINS',
    sigla: 'TO',
    courts: [
      {
        name: 'JUSTIÇA ELEITORAL',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/processo-judicial-eletronico/processo-judicial-eletronico-1',
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
        name: 'TRT 10 - 2º GRAU',
        url: 'https://pje.trt10.jus.br/primeirograu/login.seam',
      },
      {
        name: 'TRT 10 - 2º GRAU',
        url: 'https://pje.trt10.jus.br/segundograu/login.seam',
      },
    ],
  },
]
