import prisma from "../../database/prisma.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const SECRET = "supersecret"

export async function register(data) {

    const hash = await bcrypt.hash(data.password, 10)

    const user = await prisma.user.create({
        data: {
            email: data.email,
            password: hash,
            name: data.name,
            role: data.role
        }
    })

    return user
}

export async function login(data) {

    const user = await prisma.user.findUnique({
        where: { email: data.email }
    })

    if (!user) throw new Error("User not found")

    const valid = await bcrypt.compare(data.password, user.password)

    if (!valid) throw new Error("Invalid password")

    const token = jwt.sign(
        { id: user.id, role: user.role },
        SECRET
    )

    return { token, user }
}