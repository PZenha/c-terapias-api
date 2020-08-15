import { IResolvers } from 'graphql-tools';
import { ObjectID } from 'mongodb'
import Observation from '../../../models/observation';

interface IAddObs {
    observation: {
        user_id: ObjectID
        obs: string
    }
}

const addClientObeservation: IResolvers = {
    Mutation: {
        addObeservation: async (_, args: IAddObs) => {
            try {
                return await Observation.findOneAndUpdate({ user_id: args.observation.user_id }, {
                    $push: { observations: { description: args.observation.obs } }
                },
                    { new: true }
                )
            } catch (err) {
                throw new Error(`Failed to add observation! ${err}`);
            }
        }
    }
}

export default addClientObeservation