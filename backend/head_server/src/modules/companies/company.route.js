import express from "express"
import * as controller from "./company.controller.js"
import auth from "../../middleware/auth.middleware.js"

const router = express.Router()

router.get("/list", controller.listCompanies)
router.post("/companybyid", controller.getCompanyByUser)

router.post("/", auth, controller.createCompany)

export default router