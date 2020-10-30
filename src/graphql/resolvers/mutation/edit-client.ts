import { IResolvers } from 'graphql-tools'
import { ObjectID } from 'mongodb'
import Client, { IClient } from '../../../models/client'

interface IEditClient {
    client: IClient
}

const editClient: IResolvers = {
    Mutation: {
        editClient: async (_, args: IEditClient) => {
            await Client.findOneAndUpdate({ _id: args.client._id }, {
                name: args.client.name,
                age: args.client.dob,
                email: args.client.email,
                phone: args.client.phone,
                gender: args.client.gender,
                address: args.client.address,
                advisedBy: args.client.advisedBy
            })
            return args.client
        }
    }
}

export default editClient