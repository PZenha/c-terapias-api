import { gql } from 'apollo-server';

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
    name: String
    age: Int
    email: String
    phone: String
    gender: Gender
    address: Address
    advisedBy: String
    observations_id: ID
  }

  input ClientInput {
    name: String!
    age: Int!
    email: String!
    phone: String!
    gender: Gender!
    address: AddressInput!
    advisedBy: String
  }

  type Query {
    addClient(name: String): String
    listAllClients: [Client]
  }

  type Mutation {
    addNewClient(client: ClientInput): Client
  }
`;

export default client;
