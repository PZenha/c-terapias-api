import { gql } from 'apollo-server';

const observation = gql`
  type Observation {
    description: String
    date: Date
  }

  type Observation {
    observations: [Observation!]
  }
`;

export default observation;
