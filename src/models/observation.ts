import mongoose, { Schema, Document } from 'mongoose';
import { ObjectID } from 'mongodb';

export interface IObservation extends Document {
  user_id: ObjectID;
  observations: {
    description: string;
    created_at?: Date;
  }[];
}

const ObservationSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Client',
  },
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
