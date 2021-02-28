import { IResolvers } from 'graphql-tools'
import { ObjectId } from 'mongoose'
import Appointment from '../../../../models/appointment'

interface IFindAppointmentByTimeIntervalInput {
    starts_at: Date
    ends_at: Date
}

const findAppointmentByTimeInterval: IResolvers = {
  Query: {
    findAppointmentByTimeInterval: async (_, args: IFindAppointmentByTimeIntervalInput) => {
      const { starts_at, ends_at } = args
      const appointments = await Appointment.find({
        scheduled_to: {
          $gte: new Date(starts_at),
          $lte: new Date(ends_at),
        },
      })
      return appointments
    },
  },
}

export default findAppointmentByTimeInterval
