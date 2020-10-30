import { IResolvers } from 'graphql-tools';
import Client from '../../../models/client';

interface ISearch {
    name?: string
}

const SearchClients: IResolvers = {
    Query: {
        searchClients: async (_, args: ISearch) => {
            const client = await Client.aggregate()
            .match({name: args.name})
            .lookup({
                from: 'observations',
                localField: 'observations_id',
                foreignField: '_id',
                as: 'observations'
            })
            .unwind('observations')
            .exec()
            return client
        }
    }
}

export default SearchClients