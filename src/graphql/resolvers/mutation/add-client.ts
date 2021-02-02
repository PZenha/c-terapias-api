import { IResolvers } from 'graphql-tools';
import Client, { IClient } from '../../../models/client';
import Observation from '../../../models/observation';

interface IClientInput {
  client: IClient & { observation: string}
}

const AddNewClient: IResolvers = {
  Mutation: {
    addNewClient: async (_, args: IClientInput) => {
      const { client } = args
      try{
        
        const newClient = await Client.create({
          name: client.name,
          dob: client.dob,
          email: client.email,
          phone: client.phone,
          gender: client.gender,
          address: client.address,
          advisedBy: client.advisedBy,
        })

        await Observation.create({
          client_id: newClient._id,
          description: client.observation
        })

        return true;
      }catch(err){
        throw new Error(err)
      }
      
    },
  },
};

export default AddNewClient;
