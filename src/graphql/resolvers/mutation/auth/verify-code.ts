import { IResolvers } from 'graphql-tools'
import User, { IUser } from '../../../../models/user'
import totp from '../../../../utils/totp'
import { TOTP_SECRET } from '../../../../config'
import { generateRecoveryToken } from '../../../../utils/jwt'

interface IVerifyCodeArgs {
    input: {
        code: string
        username: string
    }
}

const verifyCode: IResolvers = {
  Mutation: {
    verifyCode: async (_, args: IVerifyCodeArgs) => {
      const { code, username } = args.input
      console.log(code)
      const isValid = totp.verify({ token: code, secret: TOTP_SECRET })
      console.log(isValid)
      if (!isValid) {
        throw new Error('Code is not valid!')
      }

      const user: IUser = await User.findOne({ username })

      const recoveryToken = generateRecoveryToken(user._id)
      return recoveryToken
    },
  },
}

export default verifyCode
