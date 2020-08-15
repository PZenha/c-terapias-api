import mongoose, { Schema, Document} from 'mongoose';

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
  created_at: Date
  advisedBy: string;
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
    default: Date.now
  },
  advisedBy: {
    type: String,
  }
});

export default mongoose.model<IClient>('Client', ClientSchema);
