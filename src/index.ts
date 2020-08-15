import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import { MONGODB_URI } from './config';
import { connect } from 'mongoose';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers as any,
  playground: true,
  context: ({ req, res }) => ({ req, res })
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());

server.applyMiddleware({ app });

connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB...');
  })
  .catch(() => {
    console.log('Failed to connect to MongoDB...');
  });

app.listen(3000, () => {
  console.log(`Listening on Port http://localhost:3000${server.graphqlPath}`);
});
