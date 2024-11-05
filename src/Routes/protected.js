import express from "express"
import { authMiddlewares } from "../middlewares/authMiddlewares.js"

const protectedUser = express.Router()

protectedUser.get('/dashboard', authMiddlewares, (req, res) => {
    res.status(200).json({ message: "Você está logado! Bem vindo(a) " + req.authenticatedUser })
})

export { protectedUser }