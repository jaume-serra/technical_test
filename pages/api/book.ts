import "reflect-metadata"
import type { NextApiRequest, NextApiResponse } from 'next'
import { initDB } from "../../src/data-source"
import { Book } from "../../src/entity/Book"


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if(req.method === 'GET'){
      const conn = await initDB()
      const bookRepo = conn.getRepository(Book)
      const query = parseInt(req.query['id'][0]);
      const oneBook = await bookRepo.findOneBy({id: query})
      res.status(200).json(oneBook)
  }
  if(req.method === 'POST'){
    const conn = await initDB()
    const bookRepo = conn.getRepository(Book)
    const {id,title, author,description, price} = req.body
    
    bookRepo.createQueryBuilder().update({
      title,
      author,
      description,
      price
    })
    .where({
      id
    })
    .returning('*')
    .execute()
    res.status(200).json({'msg':true})
  }
}
