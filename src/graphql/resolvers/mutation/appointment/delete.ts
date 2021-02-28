import { IResolvers } from 'graphql-tools'
import { ObjectId } from 'mongoose'
import Appointment from '../../../../models/appointment'

interface IDeleteAppointmentInput {
    _id: ObjectId
}

const deleteAppointment: IResolvers = {
  Mutation: {
    deleteAppointment: async (_, args: IDeleteAppointmentInput) => {
      try {
        await Appointment.findByIdAndDelete(args._id)
        return true
      } catch (err) {
        throw new Error(err)
      }
    },
  },
}

export default deleteAppointment
