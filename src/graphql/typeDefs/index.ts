import { applyMiddleware } from 'graphql-middleware'
import { makeExecutableSchema } from 'graphql-tools'
import client from './client'
import observation from './observation'
import auth from './auth'
import appointment from './appointment'
import permissions from '../permissions'
import resolvers from '../resolvers'

const typeDefs = [client, observation, auth, appointment]

const schema = applyMiddleware(makeExecutableSchema({ typeDefs, resolvers }), permissions)

export default schema
