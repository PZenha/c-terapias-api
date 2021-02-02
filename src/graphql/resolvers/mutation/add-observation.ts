import { IResolvers } from 'graphql-tools';
import { ObjectID } from 'mongodb'
import Observation from '../../../models/observation';

interface IAddObservationInput {
    observation: {
        description: string
        client_id: ObjectID
    }
}

const addClientObservation: IResolvers = {
    Mutation: {
        addObservation: async (_, args: IAddObservationInput) => {
            const { observation: { description, client_id}} = args
            try {
                await Observation.create({
                    client_id,
                    description
                })
                return true
            } catch (err) {
                throw new Error(`Failed to add observation! ${err}`);
            }
        }
    }
}

export default addClientObservation