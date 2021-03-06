import { ExpressContext } from 'apollo-server-express/dist/ApolloServer'
import { AuthenticationError } from 'apollo-server-express'
import User, { IUser } from '../models/user'
import { decodeToken } from '../utils/jwt'

export interface IContext extends ExpressContext {
    user: IUser
    userToken: string
}

const context = async (context: ExpressContext) => {
  const authorization = context.req.headers.authorization ? context.req.headers.authorization : ''

  const userToken = authorization.match(/^Bearer .*/) && authorization.split(' ')[1] || null

  const user = (userToken && (await getUser(userToken))) || null

  return { user, userToken }
}

const getUser = async (token: string): Promise<IUser | null> => {
  try {
    const payload = await decodeToken(token)
    const user = await User.findById(payload.uid)

    if (!user) {
      return null
    }
    return user
  } catch (err) {
    return null
  }
}

export default context
