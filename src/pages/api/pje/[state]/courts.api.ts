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

  const id = String(req.query.state)

  const state = await prisma.states.findUnique({
    where: {
      id,
    },
  })

  if (!state) {
    return res.status(404).json({
      message: 'State not found.',
    })
  }

  const stateBodySchema = z.object({
    name: z.string(),
    url: z.string(),
  })

  const { name, url } = stateBodySchema.parse(req.body)

  const courtsName = await prisma.courts.findFirst({
    where: {
      name,
    },
  })

  const courtsUrl = await prisma.courts.findUnique({
    where: {
      url,
    },
  })

  if (courtsName || courtsUrl) {
    return res.status(400).json({
      message: 'Tribunal ou URL já cadastrado, tente outro novamente!',
    })
  }

  await prisma.courts.create({
    data: {
      name,
      url,
      states_id: state.id,
    },
  })

  return res.status(201).end()
}
