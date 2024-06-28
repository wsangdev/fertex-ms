import express from 'express'
import api from './src/api/index.js'
import initKafka from './src/config/initkafka.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

// Inicializando KAFKA
initKafka();

//RUTAS General de API
app.use('/api', api )

app.listen(PORT, () => {
  console.log(`server listen in port ${PORT}`)
})
