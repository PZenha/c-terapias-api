import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
    username: string
    email: string
    secret: string
}

const SUser = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  secret: {
    type: String,
    required: true,
  },
})

export default mongoose.model<IUser>('User', SUser)
