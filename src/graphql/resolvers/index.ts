import AddNewClient from './mutation/add-client'
import updateClient from './mutation/update-client'
import ListAllClients from './query/list-all-clients'
import SearchClients from './query/search-clients'
import addObservation from './mutation/add-observation'
import findObservations from './query/find-observations'
import deleteClient from './mutation/delete-client'

const resolvers = [
  ListAllClients,
  AddNewClient,
  updateClient,
  SearchClients,
  addObservation,
  findObservations,
  deleteClient,
]

export default resolvers
