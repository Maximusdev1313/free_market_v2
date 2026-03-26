import * as service from "./product.service.js"

export async function createProduct(req, res, next) {

    try {

        const product = await service.createProduct(
            req.body,
            req.body.companyId
        )

        res.status(201).json(product)

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