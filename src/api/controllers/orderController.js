import { createOrder } from "../../services/orderServices.js"

// Generando una nueva Orden 
export const generateNewOrden = async (req, res) => {
  try {
    const order = await createOrder(req.body);
    res.status(200).send(order)
  }
  catch (err) {
    res.status(500).send(err.message)
  }
}

