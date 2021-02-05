import { gql } from 'apollo-server-express'

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
  }

  type ClientObservations {
    _id: ID
    description: String
    created_at: Date
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
    observations: [ClientObservations]
  }

  input ClientInput {
    _id: ID
    name: String
    dob: Date
    email: String
    phone: String
    gender: Gender
    address: AddressInput
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
    searchClients(name: String): [FullClientData]
    FindAllClients: [Client]
    findClient(_id: ID): FullClientData
  }

  extend type Mutation {
    addNewClient(client: ClientInput): Boolean
    updateClient(client: ClientInput): Boolean
    deleteClient(_id: ID): Boolean
  }
`

export default client
