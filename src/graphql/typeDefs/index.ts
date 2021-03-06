import { applyMiddleware } from 'graphql-middleware'
import { makeExecutableSchema } from 'apollo-server'
import client from './client'
import observation from './observation'
import auth from './auth'
import appointment from './appointment'
import permissions from '../permissions'
import resolvers from '../resolvers'

const typeDefs = [client, observation, auth, appointment]

// const schema = applyMiddleware(makeExecutableSchema({ typeDefs, resolvers }), permissions)

// const schema = makeExecutableSchema({ typeDefs, resolvers: (resolvers as any) })

export default typeDefs
