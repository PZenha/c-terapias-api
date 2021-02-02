import mongoose, { Schema, Document } from 'mongoose'
import { ObjectID } from 'mongodb'

export interface IObservation extends Document {

    description: string;
    created_at?: Date;
    client_id: ObjectID
}

const ObservationSchema = new Schema({
  description: {
    type: String,
    required: false,
  },
  created_at: {
    type: Date,
    required: false,
    default: Date.now,
  },
  client_id: {
    type: ObjectID,
    ref: 'Client',
    required: true,
  },
})

export default mongoose.model<IObservation>('Observation', ObservationSchema)
