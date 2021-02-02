import { IResolvers } from 'graphql-tools'
import Client from '../../../models/client'

const FindAllClients: IResolvers = {
  Query: {
    FindAllClients: async () => await Client.find({}),
  },
}

export default FindAllClients
