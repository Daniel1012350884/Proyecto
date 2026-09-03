// src/config/env.ts
import dotenv from "dotenv";
dotenv.config();

export const env = {
  port: process.env.PORT || 3000,
  mongoUri : "mongodb+srv://danielevilla0203_db_user:HfSUpmd0sxUIrC3Z@cluster1.xnhnvu5.mongodb.net/?appName=Cluster1sudosuoo",
  mongoDBname : "programacionTodo"
};