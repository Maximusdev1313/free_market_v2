import { verifyToken } from "../utils/jwt.js"

export default function auth(req, res, next) {

    const header = req.headers.authorization

    if (!header) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    const token = header.split(" ")[1]

    try {

        const decoded = verifyToken(token)

        req.user = decoded

        next()

    } catch (err) {

        return res.status(401).json({ message: "Invalid token" })
    }

}