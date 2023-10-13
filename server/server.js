import express from 'express'
import ViteExpress from 'vite-express'
import morgan from 'morgan'

const app = express()

//middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
app.use(express.json())

import handlerFunctions from './controller.js'

//routes go here

//door to the server 
ViteExpress.listen(app, 5173, () => console.log(`Welcome! Report to http://localhost:5173`))