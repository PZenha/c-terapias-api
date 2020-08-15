import { IResolvers } from 'graphql-tools';
import Client from '../../../models/client';


const ListAllClients: IResolvers = {
  Query: {
    listAllClients: async () => {
      return await Client.find({});
    },
  },
};

export default ListAllClients;
