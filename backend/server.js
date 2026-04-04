require('dotenv').config()

const cors = require('cors')
const express = require('express')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
const connectDB = require('./config/db')
const contactRoutes = require('./routes/contactRoutes')
const { errorHandler, notFound } = require('./middleware/errorHandler')

const app = express()
const PORT = process.env.PORT || 5000

app.use(
  cors({
    origin: process.env.CLIENT_URL ? process.env.CLIENT_URL.split(',') : '*',
  }),
)
app.use(helmet())
app.use(express.json({ limit: '1mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(
  '/api/contact',
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
      message: 'Too many contact requests from this IP. Please try again later.',
    },
  }),
)

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/contact', contactRoutes)
app.use(notFound)
app.use(errorHandler)

async function startServer() {
  try {
    await connectDB()
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`)
    })
  } catch (error) {
    console.error('Failed to start server', error)
    process.exit(1)
  }
}

startServer()
