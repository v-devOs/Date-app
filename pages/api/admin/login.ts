import { NextApiRequest, NextApiResponse } from 'next'
import { IUser } from '@/interfaces'
import { database } from '@/database'
import User from '@/models/User'
import bcryptjs from 'bcryptjs';
import { signToken } from '@/utils/jwt';


type Data = { message: string } | { token: string, user: IUser}

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
  
  switch(req.method){
    case 'POST':
      return loginUser( req, res)
    default:
      return res.status(400).json({message: 'Bad request'})
  }
  
}

const loginUser = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

  const { email = '', password = '' } = req.body as { email: string, password: string }

  await database.connect()

  const user = await User.findOne({ email }).lean()

  if( !user ) return res.status(400).json({message: `No encontramos un usuario con email: ${email}`})

  if( user.role === 'CLIENT' ) return res.status(403).json({message: 'No tienes acceso a este end-point'})

  if( !bcryptjs.compareSync( password, user.password! )) return res.status(400).json({message: 'Error al validar credenciales'})

  await database.disconnect()

  const { _id } = user

  const token = signToken(_id, email)

  return res.status(200).json({ token, user })
}
