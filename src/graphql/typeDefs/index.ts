import { gql } from 'apollo-server';
import client from './client';
import observation from './observation';

const typeDefs = [client, observation]


export default typeDefs;
