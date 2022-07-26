import "reflect-metadata"
import type { NextApiRequest, NextApiResponse } from 'next'
import { initDB } from "../../src/data-source"
import { Book } from "../../src/entity/Book"




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if(req.method === 'POST'){
    const conn = await initDB()
    const bookRepo = conn.getRepository(Book)
    const {title, author,description, price} = req.body
    const book = new Book()
    book.title = title
    book.author = author
    book.description = description
    book.price = price
    await bookRepo.save(book)
    res.status(200).json({'msg':true})
  }
}
