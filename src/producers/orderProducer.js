import kafka from 'kafkajs'

const kafka = new kafka({
  clientId: 'order-ms',
  brokers: [process.env.KAFKA_BROKER] //ESTO DEBE ESTAR EN MI ENV
})

const producer = kafka.producer();

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