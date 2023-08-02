import mongoose, { Schema, model, Model } from 'mongoose'
import { ITatto } from '@/interfaces'


const tattoSchema = new Schema({
  img:                { type: String, require: true },
  width:              { type: String, require: true },
  height:             { type: String, require: true },
  isBlackAndWhite:    { type: Boolean, require: true }
})


const Tatto: Model<ITatto> = mongoose.models.Tatto || model('Tatto', tattoSchema)

export default Tatto