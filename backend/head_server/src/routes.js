// src/routes.js

import { Router } from 'express'
import authRoutes from "./modules/auth/auth.routes.js"

import userRoutes from './modules/users/user.routes.js'
import companyRoutes from './modules/companies/company.route.js'
// import orderRoutes from './modules/orders/order.routes.js'
// import authRoutes from './modules/auth/auth.routes.js'
import productRoutes from './modules/products/product.route.js'
const router = Router()

/**
 * Each module handles its own routes.
 * Here we just mount them.
*/
router.get('/health', (req, res) => {
    res.json({ status: 'OK' })
})
router.use("/auth", authRoutes)
router.use('/users', userRoutes)
router.use('/companies', companyRoutes)
router.use('/products', productRoutes)
// router.use('/orders', orderRoutes)
// router.use('/auth', authRoutes)

export default router