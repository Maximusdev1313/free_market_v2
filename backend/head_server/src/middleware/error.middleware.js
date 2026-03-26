// src/middleware/error.middleware.js

export default function errorMiddleware(err, req, res, next) {
    console.error(err)

    /**
     * In production you may hide stack traces.
     * For now we return message.
     */
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error'
    })
}