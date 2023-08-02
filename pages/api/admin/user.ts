import type { NextApiRequest, NextApiResponse } from 'next'
import { IUser } from '@/interfaces'

import { createUser, deleteUserById, getAllUsers, updateInfoUser } from '@/database'
import { userRoles } from '@/types'
import { isValidObjectId } from 'mongoose'

type Data = | { message: string } | IUser[] | IUser

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  
  switch (req.method) {
    case 'GET':
      return getUsers( req, res )
    case 'POST':
      return setUser( req, res )
    case 'PUT':
      return updateUser( req, res )
    case 'DELETE':
      return deleteUser( req, res )
  
    default:
      return res.status(400).json({ message: 'Bad Request'})
  }

}

const getUsers = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

  const users = await getAllUsers()

  return !users 
    ? res.status(500).json({message: 'Verificar logs de la consola'}) 
    : res.status(200).json(users)
}


const setUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  
  const { name = '', email = '', password = '', role = 'ADMIN' } = req.body as { name: string, email: string, password: string, role: userRoles }

  const newUser = await createUser( name, email, password, role )

  return !newUser 
    ? res.status(400).json({message: `Error al crear usuario con conrreo: ${email}, verificar logs del servidor para mas informacion`})
    : res.status(200).json(newUser)
}


const updateUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  
  const { _id = '', name = '', email = '', role = 'ADMIN' } = req.body as { _id: string, name: string, email: string, role: userRoles }

  if( !isValidObjectId(_id) ) return res.status(400).json({message: 'ID de mongo no valido'})

  if( name === '' && email === '') return res.status(400).json({message: 'No hay informacion para actualizar'})

  const updatedUser = await updateInfoUser(_id, name, email, role)

  return !updatedUser
    ? res.status(400).json({message: `Error al actualizar la info del usuario ${name}, verificar logs del servidor`})
    : res.status(200).json(updatedUser)
}

const deleteUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  
  const { _id } = req.body as { _id: string }

  if( !isValidObjectId(_id)) return res.status(400).json({message: 'Id no valido'})

  const userDeleted = await deleteUserById( _id )

  return !userDeleted
    ? res.status(400).json({message: 'Error al eliminar usuario, veiricar losg del sistema'})
    : res.status(200).json(userDeleted) 
}
