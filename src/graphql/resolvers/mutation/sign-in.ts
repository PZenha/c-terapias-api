import { IResolvers } from 'graphql-tools'
import { comparePassword } from '../../../utils/password'
import User, { IUser } from '../../../models/user'

export interface IsignInArgs {
    username: string
    password: string
}

const signIn: IResolvers = {
  Mutation: {
    signIn: async (_, args: IsignInArgs) => {
      const { username, password } = args
      const user: IUser = await User.findOne({ username })

      if (!user) {
        throw new Error('Something went wrong!')
      }

      if (!comparePassword(password, user.secret)) {
        throw new Error('Something went wrong!')
      }
    },
  },
}

export default signIn
