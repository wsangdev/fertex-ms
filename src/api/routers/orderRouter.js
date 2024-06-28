import { Router } from 'express'
import { generateNewOrden } from '../controllers/orderController.js'

const orderRouter = Router()

orderRouter.post('/', generateNewOrden)

export default orderRouter