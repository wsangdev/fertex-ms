import { Kafka } from "kafkajs";
import { env } from "./env.js";


const clientId = env.KAFKA_CLIENT_ID || 'order-ms'
const broker = [env.KAFKA_BROKER]

const kafka = new Kafka({ clientId: clientId, brokers: broker })
const producer = kafka.producer();

export {kafka, producer}