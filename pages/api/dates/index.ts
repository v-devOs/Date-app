import type { NextApiRequest, NextApiResponse } from 'next'
import Appointment from '@/models/Appointment'
import { database } from '@/database'
import { IAppointment } from '@/interfaces'

type Data = { message: string } | { codeDate: string} | IAppointment

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

  const { name = '', lastName = '', tel = '' } = req.body as { name: string, lastName: string, tel: string }

  if( name === '' || lastName === '' ) return res.status(400).json({message: 'Faltan valores para crear la cita'})

  const actualDate = new Date()
  const code = `${name.substring(0,2).toUpperCase()}${lastName.substring(0,3).toUpperCase()}${actualDate.getMonth()}${actualDate.getDay()}${actualDate.getFullYear()}${tel.substring(6,9)}`

  await database.connect() 

  const newAppointment = new Appointment({
    code,
    dateState: 'PARCIAL_PAIED'
  })

  await newAppointment.save()
  await database.disconnect()

  return res.status(200).json({ codeDate: code })
}

const updateAppointment = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {
  
  const { code = '', tattoer = '', day = '', month = '', hour = '', tattoToDo = '' } = 
    req.body as { code: string, tattoer: string, day: string, month: string, hour: string, tattoToDo: string }

    console.log({code, tattoer, day, month, hour, tattoToDo })

  if( code === '' || tattoer === '' || day === '' || month === '' || hour === '') return res.status(400).json({message: 'Faltan datos para agendar la cita'})

  await database.connect()
  const appointment = await Appointment.findOne({code})

  if( !appointment ) return res.status(400).json({message: 'Error con el codigo de la cita'})

  appointment.day = day
  appointment.hour = hour
  appointment.month = month,
  appointment.tattoer = tattoer
  appointment.tattoToDo = tattoToDo

  await appointment.save()
  await database.disconnect()

  return res.status(200).json(appointment)
}