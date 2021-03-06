// Queries

// Clients
import ListAllClients from './query/list-all-clients'
import SearchClients from './query/search-clients'
import findClient from './query/client'

// Observations
import findObservations from './query/find-observations'

// Appointments
import findAppointmentByClient from './query/appointment/find-by-client'
import findAppointmentByTimeInterval from './query/appointment/find-by-time-interval'

// Mutations

// Clients
import AddNewClient from './mutation/add-client'
import updateClient from './mutation/update-client'
import deleteClient from './mutation/delete-client'
import addObservation from './mutation/add-observation'

// Auth
import sendCode from './mutation/auth/send-code'
import verifyCode from './mutation/auth/verify-code'
import signIn from './mutation/auth/sign-in'
import updateSecret from './mutation/auth/update-secret'
import refreshTokens from './mutation/auth/refresh-tokens'

// Appointments
import createAppointment from './mutation/appointment/create'
import deleteAppointment from './mutation/appointment/delete'
import updateAppointment from './mutation/appointment/update'
import setAppointmentShowedUp from './mutation/appointment/set-showed-up'

const resolvers = [
  ListAllClients,
  AddNewClient,
  updateClient,
  SearchClients,
  addObservation,
  findObservations,
  deleteClient,
  findClient,
  sendCode,
  verifyCode,
  signIn,
  updateSecret,
  refreshTokens,
  createAppointment,
  deleteAppointment,
  updateAppointment,
  findAppointmentByClient,
  findAppointmentByTimeInterval,
  setAppointmentShowedUp,
]

export default resolvers
