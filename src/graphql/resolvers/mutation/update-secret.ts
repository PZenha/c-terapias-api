import { IResolvers } from 'graphql-tools'
import { comparePassword } from '../../../utils/password'
import User, { IUser } from '../../../models/user'

export interface IUpdateSecretArgs {
    password: string
}

const updateSecret: IResolvers = {
  Mutation: {
    updateSecret: async (_, args: IUpdateSecretArgs) => {
        
    },
  },
}

export default updateSecret
