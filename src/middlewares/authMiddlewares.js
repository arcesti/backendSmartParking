import jwt from 'jsonwebtoken'

export const authMiddlewares = (req, res, next) => {
    const authHeader = req.headers.authorization
    const secretKey = "ajsndjasdna"

    if(!authHeader) {
        return res.status(401).json({ message: "Authorization header required" })
    }

    const token = authHeader.split(' ')[1]

    try {
        const decodedToken = jwt.verify(token, secretKey)
        console.log(decodedToken)
        req.authenticatedUser = decodedToken
        next()
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" })
    }
}