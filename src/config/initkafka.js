import { kafka } from "./kafka.js";

// Creacion de los TOPICOS DE KAFKA 

const createKafkaTopic = async(topicName) => {
  const admin = kafka.admin()
  await admin.connect();

  const topics = await admin.listTopics();

  if(!topics.includes(topicName)) {
    await admin.createTopics({
      topics: [{ topic:topicName, numPartitions:1, replicaAssignment: 1 }]
    })
  }

  await admin.disconnect();
}

const initKafka = async() => {
  try {
    await createKafkaTopic('order-created');
      console.log('kafka topic order-created inicializado')
    } 
  catch (err) {
    console.log('fallo al inicializar el topico', err)
  }
}

export default initKafka