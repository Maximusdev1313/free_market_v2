import * as userService from './user.service.js'

export async function createUser(req, res) {
    try {

        const user = await userService.createUser(req.body)

        res.status(201).json(user)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export async function getUsers(req, res) {
    try {

        const users = await userService.getUsers()

        res.json(users)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export async function getUser(req, res) {
    try {

        const user = await userService.getUserById(req.params.id)

        res.json(user)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export async function updateUser(req, res) {
    try {

        const user = await userService.updateUser(req.params.id, req.body)

        res.json(user)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export async function deleteUser(req, res) {
    try {

        const user = await userService.deleteUser(req.params.id)

        res.json(user)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}