const path = require('path')
const express = require('express')
const jsonServer = require('json-server')
const app = express()
const api = jsonServer.router('db.json')
const port = process.env.PORT || 5000

app.use('/api', api)
app.use(express.static('public'))
app.use((req, res) => res.sendFile(path.resolve('./public/index.html')))
app.listen(port)
console.log('server listening on port ', port)
