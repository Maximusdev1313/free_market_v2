import * as service from "./product.service.js"

export async function createProduct(req, res, next) {
    try {

        const files = req.files || []

        const images = files.map(file => ({
            url: `/uploads/${file.filename}`
        }))

        const product = await service.createProduct({
            ...req.body,
            images
        })

        res.status(201).json(product)

    } catch (err) {
        next(err)
    }
}

export async function deleteImage(req, res, next) {

    try {

        const image = await service.deleteImage(req.params.id)

        res.json(image)

    } catch (err) {
        next(err)
    }

}
export async function addImages(req, res, next) {

    try {

        const images = req.files.map(file => ({
            url: `/uploads/${file.filename}`,
            productId: Number(req.params.id)
        }))

        const result = await service.addImages(images)

        res.json(result)

    } catch (err) {
        next(err)
    }

}
export async function getProducts(req, res, next) {

    try {

        const products = await service.listProducts(req.query)

        res.json(products)

    } catch (err) {
        next(err)
    }

}