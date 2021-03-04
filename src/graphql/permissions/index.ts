import { shield } from 'graphql-shield'
import isAuthenticated from './is-authenticated'

const permissions = shield({
  Query: {
    findClient: isAuthenticated,
    findObservations: isAuthenticated,
    FindAllClients: isAuthenticated,
    searchClients: isAuthenticated,
    findAppointmentByClient: isAuthenticated,
    findAppointmentByTimeInterval: isAuthenticated,
  },
})

export default permissions
