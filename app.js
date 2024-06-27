import bodyParser from 'body-parser'
import express from 'express'

const app = express()
const PORT = process.env.PORT

app.use(bodyParser.json())

//RUTAS 
app.use('/api/orders', order)



app.listen()
