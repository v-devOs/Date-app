import type { NextApiRequest, NextApiResponse } from 'next'
import Appointment from '@/models/Appointment'
import { database } from '@/database'

type Data = { message: string } | { codeDate: string}

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
  
  switch(req.method){
    case 'POST':
      return createAppointment( req, res )
    case 'PUT':
      return updateAppointment( req, res )

    default:
      return res.status(400).json({message: 'Bad request'})
  }
}

const createAppointment = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

  const { name = '', lastName = '' } = req.body as { name: string, lastName: string }

  if( name === '' && lastName === '' ) return res.status(400).json({message: 'Faltan valores para crear la cita'})

  const actualDate = new Date()
  const code = `${name.substring(0,2).toUpperCase()}${actualDate.getMonth()}${actualDate.getDay()}${actualDate.getFullYear()}${lastName.substring(0,3).toUpperCase()}`

  await database.connect() 

  const newAppointment = new Appointment({
    code
  })

  console.log(await Appointment.find())

  await newAppointment.save()
  await database.disconnect()

  return res.status(200).json({ codeDate: code })
}
