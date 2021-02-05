import { IResolvers } from 'graphql-tools'
import { Types } from 'mongoose'
import Client from '../../../models/client'
import Observation from '../../../models/observation'

const findClient: IResolvers = {
  Query: {
    findClient: async (_, args: {_id: string}) => {
      const client = await Client.aggregate()
        .match({
          _id: Types.ObjectId(args._id),
        })
        .lookup({
          from: Observation.collection.name,
          localField: '_id',
          foreignField: 'client_id',
          as: 'observations',
        })
        .exec()

      return client[0]
    },
  },
}

export default findClient
