import express from "express"
import * as controller from "./product.controller.js"
import auth from "../../middleware/auth.middleware.js"
import upload from "../../middleware/upload.middleware.js"
const router = express.Router()

router.get("/", controller.getProducts)
router.get("/my-company", auth, controller.getProductsByCompany);
router.get("/:bar_code", controller.getProductsByBarCode);

router.post("/", auth, upload.array("images", 5), controller.createProduct)

router.delete("/images/:id", controller.deleteImage)

router.post(
    "/:id/images",
    upload.array("images", 5),
    controller.addImages
)
export default router