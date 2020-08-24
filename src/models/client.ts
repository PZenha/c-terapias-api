import mongoose, { Schema, Document } from 'mongoose';

export interface IClient extends Document {
  name: string;
  dob: Date;
  email: string;
  phone: string;
  gender: 'MALE' | 'FEMALE';
  address: {
    city: string;
    zipcode: string;
    street: string;
  };
  created_at: Date;
  advisedBy: string;
  observation: string;
}

const ClientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
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
  created_at: {
    type: Date,
    default: Date.now,
  },
  advisedBy: {
    type: String,
  },
});

export default mongoose.model<IClient>('Client', ClientSchema);
