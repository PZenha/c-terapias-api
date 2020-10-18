import mongoose, { Schema, Document } from 'mongoose';
import { ObjectID } from 'mongodb';

export interface IObservation extends Document {
  observations: {
    description: string;
    created_at?: Date;
  }[];
}

const ObservationSchema = new Schema({
  observations: [
    {
      description: {
        type: String,
      },
      created_at: {
        type: Date,
        required: false,
        default: Date.now,
      },
    },
  ],
});

export default mongoose.model<IObservation>('Observation', ObservationSchema);
