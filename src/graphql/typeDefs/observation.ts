import { gql } from 'apollo-server-express';

const observation = gql`
 scalar Date

  input AddObservationInput{
    user_id: ID
    obs: String
  }

  type obs{
    description: String
    created_at: Date
  }

  type Observation {
    _id: ID
    user_id: ID
    observations: [obs]
  }

  extend type Mutation{
    addObeservation(observation: AddObservationInput): Observation
  }

  extend type Query{
    listClientObservation(user_id: ID): Observation
  }
`;

export default observation;
