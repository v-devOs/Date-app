import mongoose, { Schema, model, Model } from 'mongoose'
import { IDate } from '@/interfaces'


const dateSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', require: true },
  day:    { type: String, require: true },
  month:  { type: String, require: true },
  hour:   { type: String, requie: true },
})

const Date: Model<IDate> = mongoose.models.Date || model('Date', dateSchema)

export default Date