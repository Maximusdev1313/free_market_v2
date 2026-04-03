import prisma from "../../database/prisma.js"

export async function createProduct(data) {

    return prisma.product.create({
        data: {
            name: data.name,
            price: Number(data.price),
            stock: Number(data.stock),
            companyId: Number(data.companyId),

            images: {
                create: data.images
            }
        },
        include: {
            images: true
        }
    })

}
import fs from "fs"

export async function deleteImage(id) {

    const image = await prisma.productImage.findUnique({
        where: { id: Number(id) }
    })

    if (!image) throw new Error("Image not found")

    // delete file from disk
    const path = image.url.replace("/uploads/", "uploads/")
    if (fs.existsSync(path)) {
        fs.unlinkSync(path)
    }

    return prisma.productImage.delete({
        where: { id: Number(id) }
    })

}
export async function addImages(images) {

    return prisma.productImage.createMany({
        data: images
    })

}
export async function replaceImages(productId, files) {

    // delete old
    await prisma.productImage.deleteMany({
        where: { productId }
    })

    const images = files.map(file => ({
        url: `/uploads/${file.filename}`,
        productId
    }))

    return prisma.productImage.createMany({
        data: images
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