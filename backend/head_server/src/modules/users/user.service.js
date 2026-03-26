import prisma from '../../database/prisma.js'
import bcrypt from 'bcryptjs'

export async function createUser(data) {

    const hashedPassword = await bcrypt.hash(data.password, 10)

    return prisma.user.create({
        data: {
            email: data.email,
            password: hashedPassword,
            name: data.name,
            role: data.role || "customer"
        }
    })
}

export async function getUsers() {
    return prisma.user.findMany({
        select: {
            id: true,
            email: true,
            name: true,
            role: true,
            createdAt: true
        }
    })
}

export async function getUserById(id) {
    return prisma.user.findUnique({
        where: { id: Number(id) }
    })
}

export async function updateUser(id, data) {

    if (data.password) {
        data.password = await bcrypt.hash(data.password, 10)
    }

    return prisma.user.update({
        where: { id: Number(id) },
        data
    })
}

export async function deleteUser(id) {
    return prisma.user.delete({
        where: { id: Number(id) }
    })
}