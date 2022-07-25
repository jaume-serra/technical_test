import "reflect-metadata"
import type { NextApiRequest, NextApiResponse } from 'next'
import { AppDataSource, initDB } from "../../src/data-source"
import { Book } from "../../src/entity/Book"

type BookType = {
  
}



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const conn = await initDB()

  const bookRepo = conn.getRepository(Book)
  const allBooks = await bookRepo.find()
  console.log(allBooks);


  res.status(200).json(allBooks)
}
