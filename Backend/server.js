import express from 'express'
import {connectdb} from './db/connectdb.js'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/authRoute.js'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({origin: 'http://localhost:5173', credentials: true}))

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)

app.listen(PORT, ()=> {
    connectdb()
    console.log(`server is running on port ${PORT}`)
})


