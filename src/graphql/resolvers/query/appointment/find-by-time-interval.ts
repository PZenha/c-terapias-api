import { IResolvers } from 'graphql-tools'
import { ObjectId } from 'mongoose'
import { ObjectID } from 'mongodb'
import Appointment from '../../../../models/appointment'
import Client, { IClient } from '../../../../models/client'

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
  Appointment: {
    clientName: async (root) => {
      const client: IClient = await Client.findById(root.client_id, { name: 1 })
      const name = client.name.split(' ')
      return `${name[0]} ${name.length > 1 && name[name.length - 1]}`
    },
  },
}

export default findAppointmentByTimeInterval
