import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
const currentProcess = process.env.NODE_ENV;


export const AppDataSource =
  process.env.NODE_ENV === "test"
    ? new DataSource({
        type: "sqlite",
        database: ":memory:",
        entities: ["src/entities/**/*.ts"],
        synchronize: true,
      })
    : new DataSource({
        type: "postgres",
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PWD,
        database: process.env.POSTGRES_DB,
        synchronize: false,
        entities: ["src/entities/*.ts"],
        migrations: ["src/migrations/*.ts"],
      });

      AppDataSource.initialize()
    .then(() => {
        console.log("Data Source initialized")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })


