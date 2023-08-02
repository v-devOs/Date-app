import mongoose, { Schema, model, Model } from 'mongoose'


const userSchema = new Schema({
  name: { type: String, require: true },
  role: { 
    type: String,
    enum: {
      values: ['CLIENT', 'TATTOER' , 'ADMIN'],
      message: '{VALUE} no es un role valido',
      default: 'CLIENT',
      required: true
    }
  },
  email: { type: String },
  passWord: { type: String },
  dateState: {
    type: String,
    enum: {
      values: ['TOTAL_PAIED', 'PARCIAL_PAIED', 'NO_PAIED'],
      message: '{VALUE} no en un estado valido',
      default: 'NO_PAIED'
    }
  },
  tattoToDo: {
    
  }
})