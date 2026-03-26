// Import Prisma package (CommonJS workaround)
import pkg from '@prisma/client'

// Extract PrismaClient
const { PrismaClient } = pkg

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error']
})
// Export for use in the app
export default prisma