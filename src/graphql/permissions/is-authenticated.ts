import { rule } from 'graphql-shield'
import { IContext } from '../context'

const isAuthenticated = rule({
  cache: 'contextual',
})(async (parent, args, ctx: IContext, info) => ctx.user !== null)

export default isAuthenticated
