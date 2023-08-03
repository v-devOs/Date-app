import mongoose, { Schema, model, Model } from 'mongoose'
import { IDate } from '@/interfaces'


const dateSchema = new Schema({
  day:    { type: String, require: true },
  month:  { type: String, require: true },
  hour:   { type: String, requie: true },
  code:   { type: String, require: true},
  dateState: {
    type: String,
    enum: {
      values: ['TOTAL_PAIED', 'PARCIAL_PAIED', 'NO_PAIED'],
      message: '{VALUE} no en un estado valido',
      default: 'NO_PAIED'
    }
  },
})

const Date: Model<IDate> = mongoose.models.Date || model('Date', dateSchema)

export default Date