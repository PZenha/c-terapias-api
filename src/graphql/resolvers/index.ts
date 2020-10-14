import clientAddNewClient from './mutation/add-client';
import editClient from './mutation/edit-client'
import ListAllClients from './query/list-all-clients';
import SearchClients from './query/search-clients'
import addClientObservation from './mutation/add-observation'
import listObservations from './query/list-observations'
import deleteClient from './mutation/delete-client'

const resolvers = [
    ListAllClients,
    clientAddNewClient,
    editClient,
    SearchClients,
    addClientObservation,
    listObservations,
    deleteClient
];

export default resolvers;
