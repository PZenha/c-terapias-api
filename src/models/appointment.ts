import { ObjectID } from 'mongodb'
import mongoose, { Schema, Document, ObjectId } from 'mongoose'

export interface IAppointment extends Document {
    client_id: ObjectId
    scheduled_to: Date
    created_at: Date
    showed_up: Boolean
}

const AppointmentSchema = new Schema({
  client_id: {
    type: ObjectID,
    ref: 'Client',
    required: true,
  },
  scheduled_to: {
    type: Date,
    required: true,
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
  showed_up: {
    type: Boolean,
    default: null,
  },
})

export default mongoose.model<IAppointment>('Appointment', AppointmentSchema)
