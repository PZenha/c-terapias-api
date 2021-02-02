import { IResolvers } from 'graphql-tools'
import { ObjectID } from 'mongodb'
import Observation from '../../../models/observation'

const findObservations: IResolvers = {
  Query: {
    findObservations: async (_, args: { client_id: ObjectID }) => {
      const obs = await Observation.findOne({ client_id: args.client_id })
      return obs
    },
  },
}

export default findObservations
