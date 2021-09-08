import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import { connect } from 'mongoose'
import { MONGODB_URI, NODE_ENV } from './config'
import schema from './graphql/typeDefs'
import context from './graphql/context'

const app = express()
const port = process.env.PORT || 5000

const server = new ApolloServer({
  schema,
  // resolvers: resolvers as any,
  playground: NODE_ENV === 'development',
  context,
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(helmet());
app.use(morgan('tiny'))
app.use(cors())

server.applyMiddleware({ app })

connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => {
    console.log('Connected to MongoDB...')
  })
  .catch(() => {
    console.log('Failed to connect to MongoDB...')
  })

app.listen(port, () => {
  console.log(`Listening on Port http://localhost:${port}`)
})
