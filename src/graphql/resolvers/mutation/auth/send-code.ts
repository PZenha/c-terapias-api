import { IResolvers } from 'graphql-tools'
import User, { IUser } from '../../../../models/user'
import totp from '../../../../utils/totp'
import { TOTP_SECRET } from '../../../../config'

interface ISendCodeArgs {
    username: string
}

const sendCode: IResolvers = {
  Mutation: {
    sendCode: async (_, args: ISendCodeArgs) => {
      const { username } = args
      const user: IUser = await User.findOne({ username })
      if (!user) {
        throw new Error('Something went wrong!')
      }

      const code = totp.generate(TOTP_SECRET)
      return code
    },
  },
}

export default sendCode
