import { IResolvers } from 'graphql-tools';
import Client from '../../../models/client';


const FindAllClients: IResolvers = {
  Query: {
    FindAllClients: async () => {
      return await Client.find({});
    },
  },
};

export default FindAllClients;
