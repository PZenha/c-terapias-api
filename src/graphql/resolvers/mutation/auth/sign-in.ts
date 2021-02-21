import { IResolvers } from 'graphql-tools'
import { comparePassword } from '../../../../utils/password'
import User, { IUser } from '../../../../models/user'
import { generateTokens } from '../../../../utils/jwt'

export interface IsignInArgs {
  input: {
    username: string
    password: string
  }
}

const signIn: IResolvers = {
  Mutation: {
    signIn: async (_, args: IsignInArgs) => {
      const { username, password } = args.input
      const user: IUser = await User.findOne({ username })

      if (!user) {
        throw new Error('Something went wrong!')
      }

      if (!comparePassword(password, user.secret)) {
        throw new Error('Something went wrong!')
      }

      const { accessToken, refreshToken } = generateTokens(user._id)
      return { accessToken, refreshToken }
    },
  },
}

export default signIn
