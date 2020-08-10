import mongoose, { Schema, Document, Types } from 'mongoose';
import { ObjectID } from 'mongodb';

export interface IClient extends Document {
  name: string;
  age: number;
  email: string;
  phone: string;
  gender: 'MALE' | 'FEMALE';
  address: {
    city: string;
    zipcode: string;
    street: string;
  };
  advisedBy: string;
  // observations_id: ObjectID;
}

const ClientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['MALE', 'FEMALE'],
  },
  address: {
    city: {
      type: String,
      required: false,
    },
    zipcode: {
      type: String,
      required: false,
    },
    street: {
      type: String,
      required: false,
    },
  },
  advisedBy: {
    type: String,
  },
  //   observations_id: {
  //     type: Types.ObjectId,
  //   },
});

export default mongoose.model<IClient>('Client', ClientSchema);
