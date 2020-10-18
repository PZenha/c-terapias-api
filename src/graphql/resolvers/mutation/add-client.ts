import { IResolvers } from 'graphql-tools';
import Client, { IClient } from '../../../models/client';
import Observation from '../../../models/observation';

interface IClientInput {
  client: IClient;
}

const clientAddNewClient: IResolvers = {
  Mutation: {
    addNewClient: async (_, args: IClientInput) => {

      const observation = await Observation.create({
        observations: [{
          description: args.client.observation
        }],
      });

      const newClient = new Client({
        name: args.client.name,
        dob: args.client.dob,
        email: args.client.email,
        phone: args.client.phone,
        gender: args.client.gender,
        address: args.client.address,
        advisedBy: args.client.advisedBy,
        observations_id: observation._id
      });

      await newClient.save();

      return newClient;
    },
  },
};

export default clientAddNewClient;
