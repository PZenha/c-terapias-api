import { IResolvers } from 'graphql-tools';
import Client from '../../../models/client';
import Observation from '../../../models/observation'


const SearchClients: IResolvers = {
    Query: {
        searchClients: async (_, args: {name: string}) => {
            const clients = await Client.aggregate()
            .match({ $or: [
                    {
                        'name': {$regex: `${args.name}`,$options:'i'}
                    },
                    {
                        'phone': {$regex: `${args.name}`,$options:'i'}
                    }
                ]})
            .lookup({
                from: Observation.collection.name,
                localField: '_id',
                foreignField: 'client_id',
                as: 'observations'
            })
            .exec()

            return clients
        }
    }
}

export default SearchClients