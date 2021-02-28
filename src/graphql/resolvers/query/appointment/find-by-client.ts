import { IResolvers } from 'graphql-tools'
import { ObjectId } from 'mongoose'
import Appointment from '../../../../models/appointment'

interface IFindAppointmentByClientInput {
    client_id: ObjectId
}

const findAppointmentByClient: IResolvers = {
  Query: {
    findAppointmentByClient: async (_, args: IFindAppointmentByClientInput) => {
      const { client_id } = args
      const appointments = await Appointment.find({ client_id })
      return appointments
    },
  },
}

export default findAppointmentByClient
