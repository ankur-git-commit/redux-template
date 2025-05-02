import express from "express"
import dotenv from "dotenv"
// initialize dotenv
dotenv.config()
import connectDB from "./config/config.js"
import cookieParser from "cookie-parser"

// PORT
const PORT = process.env.PORT || 5000

import userRoutes from "./routes/userRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"

// connect mongodb
connectDB()

// initialize express
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())


// user routes
app.use("/api/users", userRoutes)

// main page
app.get("/", (req, res) => {
    res.send("Server is ready")
})

// middleware
// error handlers
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`server running at port: ${PORT}`) 
})
