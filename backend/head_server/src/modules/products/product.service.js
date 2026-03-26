import prisma from "../../database/prisma.js"

export async function createProduct(data, companyId) {

    return prisma.product.create({
        data: {
            name: data.name,
            price: data.price,
            stock: data.stock,
            companyId
        }
    })

}

export async function listProducts(query) {

    const page = Number(query.page) || 1
    const limit = Number(query.limit) || 20
    const skip = (page - 1) * limit

    const products = await prisma.product.findMany({
        skip,
        take: limit,
        include: {
            company: true,
            category: true
        }
    })

    return products
}