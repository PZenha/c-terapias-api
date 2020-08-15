import { gql } from 'apollo-server-express';

const client = gql`
  
  
  enum Gender {
    MALE
    FEMALE
  }

  type Address {
    city: String
    zipcode: String
    street: String
  }

  input AddressInput {
    city: String
    zipcode: String
    street: String
  }

  type Client {
    _id: ID
    name: String
    age: Int
    email: String
    phone: String
    gender: Gender
    address: Address
    advisedBy: String
    created_at: Date!
  }

  input ClientInput {
    _id: ID
    name: String!
    age: Int!
    email: String!
    phone: String!
    gender: Gender!
    address: AddressInput!
    advisedBy: String
  }

  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  extend type Query {
    searchClients(name: String, phone: String): [Client]
    listAllClients: [Client]
  }

  extend type Mutation {
    addNewClient(client: ClientInput): Client
    editClient(client: ClientInput): Client
  }
`;

export default client;
