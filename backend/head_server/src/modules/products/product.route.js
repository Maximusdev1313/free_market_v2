import express from "express"
import * as controller from "./product.controller.js"
import auth from "../../middleware/auth.middleware.js"

const router = express.Router()

router.get("/", controller.getProducts)

router.post("/", auth, controller.createProduct)

export default router