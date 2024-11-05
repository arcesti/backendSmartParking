import express from 'express'
import { users } from '../users.js'
import jwt from 'jsonwebtoken'
import { authMiddlewares } from '../middlewares/authMiddlewares.js';

const router = express.Router();
const secretKey = "ajsndjasdna"

router.post('/user', (req, res) => {
    const {usuario, senha} = req.body
    const user = users.find(user => user.login === usuario)
    if(!user || senha !== user.password) {
        return res.status(401).json({ message: "Invalid credentials" })
    }
    const payload = { login:user.login, nome:user.nome, cidade:user.cidade, uf:user.uf }
    const token = jwt.sign(payload, secretKey, {
        expiresIn: "1h"
    })
    res.json({token})
});

router.get('/validar-token', authMiddlewares, (req, res) => {
    const user = users.find(user => user.login === req.authenticatedUser.login)
    res.status(200).json({user})
})

export { router }