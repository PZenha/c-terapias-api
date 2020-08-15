import clientAddNewClient from './mutation/add-client';
import editClient from './mutation/edit-client'
import ListAllClients from './query/list-all-clients';
import SearchClients from './query/search-clients'
import addClientObservation from './mutation/add-observation'
import listObservations from './query/list-observations'

const resolvers = [
    ListAllClients,
    clientAddNewClient,
    editClient,
    SearchClients,
    addClientObservation,
    listObservations
];

export default resolvers;
