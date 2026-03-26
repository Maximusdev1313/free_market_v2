import jwt from "jsonwebtoken"

const ACCESS_SECRET = process.env.JWT_SECRET

export function generateToken(payload) {

    return jwt.sign(payload, ACCESS_SECRET, {
        expiresIn: "1d"
    })

}

export function verifyToken(token) {

    return jwt.verify(token, ACCESS_SECRET)

}