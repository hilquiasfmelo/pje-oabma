import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const stateBodySchema = z.object({
    name: z.string(),
    acronym: z.string(),
  })

  const { name, acronym } = stateBodySchema.parse(req.body)

  const stateName = await prisma.states.findUnique({
    where: {
      name,
    },
  })

  const stateAcronym = await prisma.states.findUnique({
    where: {
      acronym,
    },
  })

  if (stateName || stateAcronym) {
    return res.status(400).json({
      message:
        'Esse estado ou sigla já está cadastrado, tente outro novamente!',
    })
  }

  await prisma.states.create({
    data: {
      name,
      acronym,
    },
  })

  return res.status(201).end()
}
