import { IResolvers } from 'graphql-tools';
import { ObjectID } from 'mongodb'
import Observation from '../../../models/observation';

interface IListObservationInput {
    user_id: ObjectID
}

const listObservation: IResolvers = {
    Query: {
        listClientObservation: async (_, args: IListObservationInput) => {
            return await Observation.findOne({ user_id: args.user_id })
        }
    }
}

export default listObservation