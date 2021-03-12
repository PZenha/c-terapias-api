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
  Mutation: {
    addNewClient: isAuthenticated,
    addObservation: isAuthenticated,
    deleteClient: isAuthenticated,
    updateClient: isAuthenticated,
    createAppointment: isAuthenticated,
    deleteAppointment: isAuthenticated,
    setAppointmentShowedUp: isAuthenticated,
    updateAppointment: isAuthenticated,
  },
})

export default permissions
