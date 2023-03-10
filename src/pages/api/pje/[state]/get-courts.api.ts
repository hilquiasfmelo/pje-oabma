import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
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

  const courts = await prisma.courts.findMany({
    where: {
      states_id: id,
    },
    select: {
      id: true,
      name: true,
      url: true,
      state: {
        select: {
          id: true,
          name: true,
          acronym: true,
        },
      },
    },
    orderBy: {
      name: 'asc',
    },
  })

  return res.status(200).json(courts)
}
