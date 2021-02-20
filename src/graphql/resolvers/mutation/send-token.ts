import { IResolvers } from 'graphql-tools'
import User, { IUser } from '../../../models/user'
import totp from '../../../utils/totp'
import { TOTP_SECRET } from '../../../config'

interface ISendTokenArgs {
    username: string
}

const sendToken: IResolvers = {
  Mutation: {
    sendToken: async (_, args: ISendTokenArgs) => {
      const { username } = args
      const user: IUser = await User.findOne({ username })
      if (!user) {
        throw new Error('Something went wrong!')
      }

      const secret = TOTP_SECRET + user._id
      const token = totp.generate(secret)
      return token
    },
  },
}

export default sendToken
