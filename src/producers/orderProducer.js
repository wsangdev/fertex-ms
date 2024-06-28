import { producer } from "../config/kafka.js";

// Responsaibilidad Unica: Productor que Publica Eventos
const publishOrderCreated = async(order) => {
  await producer.connect();
  await producer.send({
    topic: 'order-created',
    messages: [
      { value: JSON.stringify(order)}
    ]
  })
  await producer.disconnect();
}

export default publishOrderCreated