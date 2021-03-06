import { IResolvers } from 'graphql-tools'
import User from '../../../../models/user'
import { decodeToken, generateTokens } from '../../../../utils/jwt'

const refreshTokens: IResolvers = {
  Mutation: {
    refreshTokens: async (_, args: { refreshToken: string}) => {
      const { uid } = await decodeToken(args.refreshToken)
      if (!uid) {
        throw new Error('Refresh token is not valid!')
      }

      const user = await User.findById(uid)
      if (!user) {
        throw new Error('Refresh token is not valid!')
      }

      const tokens = generateTokens(uid)
      return { accessToken: tokens.accessToken, refreshToken: tokens.refreshToken }
    },
  },
}

export default refreshTokens
