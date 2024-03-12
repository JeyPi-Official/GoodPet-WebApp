import express from 'express'
import usersRoutes from './routes/users.routes.js'
import indexRoutes from './routes/index.routes.js'

import viewsRoutes from './routes/views.routes.js'

import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const port = process.env.port || 3000

//To use PUG view engine
app.set('view engine', 'pug')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname, 'public')));

//Static route
// app.use(express.static(__dirname + '/public'))
app.set('views', './src/public/views')

//To use the routers
app.use(indexRoutes)
app.use('/api', usersRoutes)
app.use('/app', viewsRoutes)

app.listen(port)
console.log('Server on port', port)

