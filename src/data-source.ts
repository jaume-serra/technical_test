import "reflect-metadata"
import { DataSource } from "typeorm"
import { Book } from "./entity/Book"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "jaume12345",
    database: "next_test",
    synchronize: true,
    logging: false,
    entities: [Book],
    migrations: [],
    subscribers: [],
})


export async function initDB() {
    try{
        await AppDataSource.initialize()
        return AppDataSource

    }catch(error){

        return AppDataSource
    }
}