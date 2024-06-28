import {Router} from 'express'
import orderRouter from './routers/orderRouter.js'

const api = Router()

api.use('/orders', orderRouter)

export default api  