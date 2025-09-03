import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import mongoose from 'mongoose'

const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/health', (_req, res) => {
  res.json({ ok: true })
})

const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ftcc'

async function start() {
  await mongoose.connect(mongoUri)
  const port = Number(process.env.PORT || 8080)
  app.listen(port, () => {
    console.log(`API listening on http://localhost:${port}`)
  })
}

start().catch((err) => {
  console.error(err)
  process.exit(1)
})


