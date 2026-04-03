// src/app.js

import express from 'express'
import routes from './routes.js'
import errorMiddleware from './middleware/error.middleware.js'
import userRoutes from './modules/users/user.routes.js'
import cors from 'cors'
/**
 * We create the express application here.
 * This file is responsible ONLY for configuring the app.
 * It should not start the server.
 */
const app = express()

/**
 * Built-in middleware.
 * Parses incoming JSON body (req.body).
 * Needed for POST/PUT/PATCH requests.
 */
app.use(express.json())

/**
 * Optional: security best practice.
 * Prevents exposing framework signature.
 */
app.disable('x-powered-by')

/**
 * All application routes are mounted under /api.
 * Example:
 *   /api/users
 *   /api/orders
 */
app.use(cors({ origin: ['http://localhost:5173'] }))
app.use("/uploads", express.static("uploads"))
app.use('/users', userRoutes)
app.use('/api', routes)

/**
 * Global error handler.
 * This MUST be the last middleware.
 * Any error passed with next(error)
 * will land here.
 */
app.use(errorMiddleware)

export default app