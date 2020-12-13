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
    dob: Date
    email: String
    phone: String
    gender: Gender
    address: Address
    advisedBy: String
    created_at: Date
    observations_id: ID
  }

  type SingleObservation {
    description: String
    created_at: Date
  }

  type ClientObservations {
    _id: ID
    observations: [SingleObservation]
  }

  type FullClientData {
    _id: ID
    name: String
    dob: Date
    email: String
    phone: String
    gender: Gender
    address: Address
    advisedBy: String
    created_at: Date
    observations_id: ID
    observations: ClientObservations
  }

  input ClientInput {
    _id: ID
    name: String
    dob: Date
    email: String
    phone: String
    gender: Gender
    address: AddressInput!
    advisedBy: String
    observation: String
  }

  type IDelete {
    deleteClient: Boolean
  }

  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  extend type Query {
    searchClients(name: String, phone: String): [FullClientData]
    listAllClients: [Client]
  }

  extend type Mutation {
    addNewClient(client: ClientInput): Client
    editClient(client: ClientInput): Client
    deleteClient(_id: ID): IDelete
  }
`;

export default client;
