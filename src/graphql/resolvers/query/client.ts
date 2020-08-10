import { IResolvers } from 'graphql-tools';

interface IClient {
  name: string;
  age: number;
  email: string;
  sex: Number;
  address: {
    zipcode: string;
    city: string;
  };
}

const clients: IClient[] = [
  {
    name: 'Pedro',
    age: 23,
    email: 'pedro@gmail.com',
    sex: 2,
    address: {
      zipcode: '4415-088',
      city: 'vila nova de gaia',
    },
  },
  {
    name: 'Ines',
    age: 22,
    email: 'ines@gmail.com',
    sex: 3,
    address: {
      zipcode: '4415-100',
      city: 'vila nova de gaia',
    },
  },
];

const clientResolvers: IResolvers = {
  Query: {
    addClient: (_, { name }) => `Client ${name} was added`,
    listAllClients: () => clients,
  },
};

export default clientResolvers;
