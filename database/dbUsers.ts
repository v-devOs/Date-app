import User from "@/models/User"
import { database } from "."
import { userRoles } from "@/types"
import bcryptjs from 'bcryptjs';
import {  isValidEmail } from "@/utils/validations";
import { jwt } from "@/utils";


export const getAllUsers = async() => {

  try {
    await database.connect()
    const users = await User.find()

    await database.disconnect()

    return users
  } catch (error) {
    await database.disconnect()
    console.log(error)

    return undefined
  }
}


export const createUser = async ( name: string, email: string, password: string, role: userRoles ) => {

  if( name.length < 2 ) throw new Error ('El nombre debe contener mas de 2 caracteres')

  if( password.length < 2 ) throw new Error ('La contraseña debe contener mas de 6 caracteres')

  if( !isValidEmail(email) ) throw new Error ('Correo electronico no valido')

  try {
    await database.connect()

    const user = await User.findOne({ email })

    if( user ) throw new Error('Este correo electronico ya esta registrado')

    const newUser = new User({
      email,
      name,
      role,
      password: bcryptjs.hashSync(password),
    })

    await newUser.save()
    await database.disconnect()

    const { _id } = newUser

    const token = jwt.signToken(_id, email)


    return {
      token,
      user: newUser
    }

  } catch (error) {
    await database.disconnect()
    console.log(error)
    return undefined
  }
}

export const updateInfoUser = async ( _id: string, name: string, email: string,  role: userRoles ) => {

  try {
    await database.connect()

    const user = await User.findById({_id})

    if( !user ) throw new Error(`No existe usuario con el id: ${_id}`)

    user.name = name
    user.email = email
    user.role = role

    await user.save()
    await database.disconnect()

    const token = jwt.signToken(_id, user.email)

    return {
      token,
      user: user
    }

  } catch (error) {
    await database.disconnect()
    console.log(error)
    return undefined
  }
}

export const deleteUserById = async ( _id: string ) => {
  try {
    await database.connect()

    const userToDelete = await User.findByIdAndDelete({_id})

    if( !userToDelete ) throw new Error(`No existe usuario con el id: ${_id}`)

    await database.disconnect()
    return userToDelete
  } catch (error) {
    await database.disconnect()
    console.log(error)
    return undefined
  }
}
