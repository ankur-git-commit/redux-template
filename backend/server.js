import express from "express"
import dotenv from 'dotenv'
dotenv.config()
// PORT
const PORT = process.env.PORT || 5000

import userRoutes from "./routes/userRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"


const app = express()

app.use('/api/users', userRoutes)

app.get("/", (req, res) => {
    res.send("Server is ready")
})

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`server running at port: ${PORT}`)
})
