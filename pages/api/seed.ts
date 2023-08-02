// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import bcryptjs from 'bcryptjs'

import { jwt } from '@/utils'

import User from '@/models/User'
import { database } from '@/database'

type Data = 
| { message: string }


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if( !process.env.USER_EMAIL || !process.env.USER_PASSWORD) return res.status(400).json({ message: 'No hay credenciales para crear el usuario administrador por defecto'})

  await database.connect()

  const defaultAdmin = new User({
    email: process.env.USER_EMAIL,
    password: bcryptjs.hashSync( process.env.USER_PASSWORD ),
    name: 'admin',
    role: 'ADMIN'
  })

  try {

    await defaultAdmin.save({ validateBeforeSave: true })
    
  } catch (error) {
    await database.disconnect()
    console.log(error)
    return res.status(500).json({ message: 'Revisar logs del servirdor'})
  }

  await database.disconnect()

  return res.status(200).json({
    message: 'Usuario admin base creado'
  })

}
