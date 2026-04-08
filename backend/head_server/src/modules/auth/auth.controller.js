import * as service from "./auth.service.js"
import jwt from 'jsonwebtoken'

const SECRET = "supersecret"

export async function register(req, res) {
    try {
        const user = await service.register(req.body)

        const accessToken = jwt.sign(
            { id: user.id, email: user.email },
            SECRET,
            { expiresIn: '7d' }
        )

        return res.status(201).json({
            message: 'auth success',
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role
            },
            accessToken
        })

    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

export async function login(req, res) {

    try {
        const data = await service.login(req.body)
        res.json(data)
    } catch (err) {
        res.status(401).json({ error: err.message })
    }

}