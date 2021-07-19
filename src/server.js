import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

// sub-router
const router = express.Router()

app.disable('x-powered-by')

// middleware
app.use(cors()) // permit cors
app.use(json()) // process raw request to show up as json
app.use(urlencoded({ extended: true })) // allow query params
app.use(morgan('dev')) // logging

// this path will be invoked for endpoint /api/me
router.get('/me', (req, res) => {
  res.send({ me: 'hello' })
})

// mount the sub-router with the prefix endpoint
app.use('/api', router)

// adding our own middleware
const log = (req, res, next) => {
  console.log('logging')
  next() // run the next  (middleware or controller)
}

app.use(log) // run this middleware for all routes

// CRUD
// Read
app.get('/data', (req, res) => {
  res.send({ message: 'hello' })
})

// Update
app.put('/data', (req, res) => {})

// Create
app.post('/data', (req, res) => {
  console.log(req.body)
  res.send(req.body)
})

// Delete
// app.delete()

export const start = () => {
  app.listen(3000, () => {
    console.log('server is on 3000')
  })
}
