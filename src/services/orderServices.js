import publishOrderCreated from "../producers/orderProducer.js"

export const createOrder = async (orderData) => {
  /* LOGICA DE NEGOCIO */
  //  1. Creacion de la ORDEN en la Base de Datos
  //  2. Llama al Productor para Publicar el Evento

  const saveOrder = { ...orderData,  id: Date.now() };

  try {
    // PUBLICACION DEL EVENTO A KAFKA
    await publishOrderCreated(saveOrder);
    return saveOrder
    
  } catch (err) {
    console.log('error al publicar a kafka', err)
    throw err
  }
}