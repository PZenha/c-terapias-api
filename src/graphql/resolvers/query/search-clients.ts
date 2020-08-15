import { IResolvers } from 'graphql-tools';
import Client from '../../../models/client';

interface ISearch {
    name?: string
    phone?: string
}

const SearchClients: IResolvers = {
    Query: {
        searchClients: async (_, args: ISearch) => {
            if (args.name) {
                return await Client.find({ name: args.name })
            } else {
                return await Client.find({ phone: args.phone })
            }
        }
    }
}

export default SearchClients