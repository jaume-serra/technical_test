// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: string,
  title: string,
  author: string,
  price: number,
  description: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Data>>
) {
  const result = [
    { id: '123123', title: 'Conte 1', author: 'Jaume Serra',price: 10, description: 'Hola que tal' },
    { id: '123125', title: 'Conte 2', author: 'Jaume Serra',price: 10, description: 'Be, i tu' },
    { id: '123126', title: 'Conte 3', author: 'Jaume Serra',price: 10, description: 'Be, tmb' }
  ]
  res.status(200).json(result)
}
