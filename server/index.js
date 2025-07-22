import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import listingRouter from './routes/listing.route.js'
import cookieParser from 'cookie-parser'
import path from 'path'
import cors from 'cors' // or const cors = require('cors');
dotenv.config()

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB!')
  })
  .catch((err) => {
    console.log(err)
  })

const __dirname = path.resolve()

const app = express()

const allowedOrigins = [
  'https://telangana-realestate.web.app',
  'https://telangana-realestate.firebaseapp.com',
  'http://localhost:5173',
]

// 1. Apply CORS FIRST, before any other middleware or routes
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // if you use cookies/sessions
  })
)

// 2. Then apply other middleware
app.use(express.json())
app.use(cookieParser())

// 3. Then define your routes
app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/listing', listingRouter)

app.use(express.static(path.join(__dirname, '/client/dist')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal Server Error'
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
