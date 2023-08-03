import mongoose, { Schema, model, Model } from 'mongoose'
import { IUser } from '@/interfaces'


const userSchema = new Schema({
  name:        { type: String, require: true },
  email:       { type: String },
  password:    { type: String },
  role: { 
    type: String,
    enum: {
      values: ['CLIENT', 'TATTOER' , 'ADMIN'],
      message: '{VALUE} no es un role valido',
      default: 'CLIENT',
      required: true
    }
  },
})

const User: Model<IUser> = mongoose.models.User || model('User', userSchema)

export default User