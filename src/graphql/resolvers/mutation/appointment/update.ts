import { IResolvers } from 'graphql-tools'
import { ObjectId } from 'mongoose'
import Appointment, { IAppointment } from '../../../../models/appointment'

interface IUpdateAppointmentInput {
    _id: ObjectId
    scheduled_to: Date
}

const updateAppointment: IResolvers = {
  Mutation: {
    updateAppointment: async (_, args: IUpdateAppointmentInput) => {
      const { _id, scheduled_to } = args
      try {
        await Appointment.findByIdAndUpdate(_id, {
          scheduled_to,
        })
        return true
      } catch (err) {
        throw new Error(err)
      }
    },
  },
}

export default updateAppointment
