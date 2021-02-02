import { IResolvers } from 'graphql-tools'
import { ObjectID } from 'mongodb'
import Client, { IClient } from '../../../models/client'

interface IEditClientInput {
    client: IClient
}

const updateClient: IResolvers = {
  Mutation: {
    updateClient: async (_, args: IEditClientInput) => {
      const { client } = args
      console.log(JSON.stringify(client, null, 2))
      try {
        await Client.findOneAndUpdate({ _id: client._id }, {
          $set: client,

        }, { useFindAndModify: false })
        return true
      } catch (err) {
        throw new Error(err)
      }
    },
  },
}

export default updateClient
