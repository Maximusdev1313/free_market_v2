import * as service from "./auth.service.js"

export async function register(req, res) {

    try {
        const user = await service.register(req.body)
        res.status(201).json(user)
    } catch (err) {
        res.status(500).json({ error: err.message })
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