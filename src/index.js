import express from 'express'
import { router } from './Routes/auth.js'
import { protectedUser } from './Routes/protected.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
    res.send("Pagina inicial");
});

app.use('/usuario', router)
app.use('/login', protectedUser)

const port = 4000

app.listen(port, () => console.log(`Servidor inicializado: http://localhost:${port}`))