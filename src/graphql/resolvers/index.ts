import clientResolvers from './query/client';
import clientAddNewClient from './mutation/add-client';

const resolvers = [clientResolvers, clientAddNewClient];

export default resolvers;
