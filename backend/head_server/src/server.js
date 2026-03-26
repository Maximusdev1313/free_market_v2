// src/server.js

import app from './app.js'
import prisma from './database/prisma.js'

const PORT = process.env.PORT || 3000

/**
 * This function bootstraps the server.
 * Why async? Because we want to:
 *  - Connect to database
 *  - Then start listening
 */

async function startServer() {
    try {

        // Test database connection
        await prisma.$connect()

        console.log('Database connected')

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })

    } catch (error) {
        console.error('Failed to start server:', error)
        process.exit(1)
    }
}

startServer()