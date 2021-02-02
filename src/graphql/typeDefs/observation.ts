import { gql } from 'apollo-server-express'

const observation = gql`
 scalar Date

  input AddObservationInput{
    client_id: ID
    description: String
  }

  type Observation {
    _id: ID
    client_id: ID
    description: String
    created_at: Date
  }

  extend type Mutation{
    addObservation(observation: AddObservationInput): Boolean
  }

  extend type Query{
    findObservations(client_id: ID): [Observation]
  }
`

export default observation
