import publishOrderCreated from "../producers/orderProducer"


const createOrder = async (orderData) => {
  // logica para guardar el orden el la base de datos 
  const saveOrder = { id: Date.now(), ...orderData }

  try {
    // PUBLICACION DEL EVENTO A KAFKA
    await publishOrderCreated(saveOrder);
    return saveOrder
    
  } catch (err) {
    console.log('error al publicar a kafka', err)
    throw err
  }
}

export default createOrder