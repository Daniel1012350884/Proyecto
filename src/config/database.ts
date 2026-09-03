import {MongoClient, Db} from "mongodb"
import { env } from "./env"

let client: MongoClient;
let db: Db;

export const connectDB = async (): Promise<void> => {
    client = new MongoClient(env.mongoUri);
    await client.connect();
    db = client.db(env.mongoDBname);
    console.log("Conexión a la base de datos establecida");
}
