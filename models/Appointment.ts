import mongoose, { Schema, model, Model } from 'mongoose'
import { IAppointment } from '@/interfaces'


const appointmentSchema = new Schema({
  day:         { type: String, },
  month:       { type: String, },
  hour:        { type: String, },
  code:        { type: String, require: true},
  tattoer:     { type: String },
  tattoToDo:   { type: Schema.Types.ObjectId, ref: 'Tatto' },
  dateState: {
    type: String,
    enum: {
      values: ['TOTAL_PAIED', 'PARCIAL_PAIED', 'NO_PAIED'],
      message: '{VALUE} no en un estado valido',
      default: 'NO_PAIED'
    }
  },
  
})

const Appointment: Model<IAppointment> = mongoose.models.Date || model('Date', appointmentSchema)

export default Appointment