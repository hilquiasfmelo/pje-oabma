import { prisma } from '@/lib/prisma'

async function run() {
  await prisma.accessRestricted.deleteMany()

  await prisma.accessRestricted.create({
    data: {
      code: '@#$oabma',
    },
  })
}

run()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (err) => {
    console.log(err)
    await prisma.$disconnect()
    process.exit(1)
  })
