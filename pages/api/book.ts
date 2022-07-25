import "reflect-metadata"
import type { NextApiRequest, NextApiResponse } from 'next'
import { initDB } from "../../src/data-source"
import { Book } from "../../src/entity/Book"




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const conn = await initDB()
  const bookRepo = conn.getRepository(Book)
  const query = parseInt(req.query['id'][0]);
  const oneBook = await bookRepo.findOneBy({id: query})
  console.log(oneBook);
  res.status(200).json(oneBook)
}
