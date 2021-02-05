import ListAllClients from './query/list-all-clients'
import SearchClients from './query/search-clients'
import findObservations from './query/find-observations'
import findClient from './query/client'

import AddNewClient from './mutation/add-client'
import updateClient from './mutation/update-client'
import deleteClient from './mutation/delete-client'
import addObservation from './mutation/add-observation'

const resolvers = [
  ListAllClients,
  AddNewClient,
  updateClient,
  SearchClients,
  addObservation,
  findObservations,
  deleteClient,
  findClient,
]

export default resolvers
