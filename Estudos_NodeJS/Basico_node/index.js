const express = require('express')

const userRoute = require('./routes/userRoutes')

const userRoutes = require('./routes/userRoutes')

const app = express()
const port = 3000

userRoute(app)

app.port('/', (req ,res) => res.send('Olá mundo pelo na porta 3000'))
