import path from 'path'
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

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    
    // Set static folder
    app.use(express.static(path.join(__dirname, '/frontend/dist')));
    
    // Any route that is not API will be redirected to index.html
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
    });
  } else {
    app.get('/', (req, res) => {
      res.send('API is running....');
    });
  }

// middleware
// error handlers
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`server running at port: ${PORT}`) 
})
