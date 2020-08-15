import { IResolvers } from 'graphql-tools';
import Client, { IClient } from '../../../models/client';
import Observation from '../../../models/observation'

interface IClientInput {
  client: IClient
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

      await Observation.create({
        user_id: newClient._id,
        observations: []
      })

      return newClient;
    },
  },
};

export default clientAddNewClient;
