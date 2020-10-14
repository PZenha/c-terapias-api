import { isSpecifiedScalarType } from 'graphql';
import { IResolvers } from 'graphql-tools';
import { ObjectID } from 'mongodb'
import Client, { IClient } from '../../../models/client'

interface IDelete {
    _id: ObjectID
}

const deleteClient: IResolvers = {
    Mutation: {
        deleteClient: async (_, args: IDelete ) =>{
            try{
                await Client.findByIdAndDelete(args._id)
                return true
            }catch (err){
                throw new Error(err)
            }
        }
    }
}

export default deleteClient