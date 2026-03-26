import express from "express"
import * as controller from "./company.controller.js"
import auth from "../../middleware/auth.middleware.js"

const router = express.Router()

router.get("/", controller.listCompanies)

router.post("/", auth, controller.createCompany)

export default router