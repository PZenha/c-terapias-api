import { IResolvers } from 'graphql-tools';
import Client, { IClient } from '../../../models/client';

const clientAddNewClient: IResolvers = {
  Mutation: {
    addNewClient: async (_, client: IClient) => {
      console.log(JSON.stringify(client, null, 2));
      if (!client) {
        throw new Error('Error, client data not set!');
      }

      const newClient = new Client({
        name: client.name,
        age: client.age,
        email: client.email,
        phone: client.phone,
        gender: client.gender,
        address: client.address,
        advisedBy: client.advisedBy,
      });
      await newClient.save();
      return newClient;
    },
  },
};

export default clientAddNewClient;
