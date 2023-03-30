import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import { setCookie } from 'nookies'

import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const accessBodySchema = z.object({
    code: z.string(),
  })

  const { code } = accessBodySchema.parse(req.body)

  const access = await prisma.accessRestricted.findUnique({
    where: {
      code,
    },
  })

  if (!access) {
    return res.status(403).json({
      message: 'Código de acesso inválido, tente novamente.',
    })
  }

  setCookie({ res }, '@pje:accessId', access.id, {
    maxAge: 60 * 60 * 1, // 1h
    path: '/',
  })

  return res.status(200).end()
}
