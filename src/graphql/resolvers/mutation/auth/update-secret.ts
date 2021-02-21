import { IResolvers } from 'graphql-tools'
import { comparePassword, hashPassword } from '../../../../utils/password'
import User, { IUser } from '../../../../models/user'
import { decodeToken } from '../../../../utils/jwt'

export interface IUpdateSecretArgs {
  input: {
    password: string
    recoveryToken: string
  }
}

const updateSecret: IResolvers = {
  Mutation: {
    updateSecret: async (_, args: IUpdateSecretArgs) => {
      const { password, recoveryToken } = args.input

      const decoded = await decodeToken(recoveryToken)
      if (!decoded.uid) {
        throw new Error('Invalid token')
      }

      const user: IUser = await User.findById(decoded.uid)

      if (comparePassword(password, user.secret)) {
        throw new Error('Invalid password')
      }

      const hashedPassword = hashPassword(password)
      user.secret = hashedPassword
      await user.save()
      return true
    },
  },
}

export default updateSecret
