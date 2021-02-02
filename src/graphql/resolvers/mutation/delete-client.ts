import { isSpecifiedScalarType } from 'graphql';
import { IResolvers } from 'graphql-tools';
import { ObjectID } from 'mongodb'
import Client, { IClient } from '../../../models/client'


const deleteClient: IResolvers = {
    Mutation: {
        deleteClient: async (_, args: { _id: ObjectID} ) =>{
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