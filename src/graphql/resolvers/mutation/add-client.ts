import { IResolvers } from 'graphql-tools';
import Client, { IClient } from '../../../models/client';

interface IClientInput {
  client: {
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
    advisedBy: String;
  };
}

const clientAddNewClient: IResolvers = {
  Mutation: {
    addNewClient: async (_, args: IClientInput) => {
      const newClient = new Client({
        name: args.client.name,
        age: args.client.age,
        email: args.client.email,
        phone: args.client.phone,
        gender: args.client.gender,
        address: args.client.address,
        advisedBy: args.client.advisedBy,
      });
      await newClient.save();
      return newClient;
    },
  },
};

export default clientAddNewClient;
