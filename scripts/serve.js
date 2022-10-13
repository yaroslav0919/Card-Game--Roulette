process.env.NODE_ENV = 'production'

// Ensure environment variables are read.
require('../config/env')

const path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
const DEFAULT_PORT = parseInt(process.env.SERVE_PORT, 10) || 8080

app.use(express.static(path.join(__dirname, '../build')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.use(function (req, res, next) {
  app.disable('x-powered-by')
  res.setHeader('X-Powered-By', 'LiveGamesCDN')
  next()
})

app.listen(DEFAULT_PORT, () => console.log('listening on port:', DEFAULT_PORT))

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})
