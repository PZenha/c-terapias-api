import { IResolvers } from 'graphql-tools'
import { ObjectId } from 'mongoose'
import Appointment from '../../../../models/appointment'

interface ISetAppointmentShowedUpInput {
    _id: ObjectId
    showed_up: Boolean
}

const setAppointmentShowedUp: IResolvers = {
  Mutation: {
    setAppointmentShowedUp: async (_, args: ISetAppointmentShowedUpInput) => {
      const { _id, showed_up } = args
      try {
        await Appointment.findByIdAndUpdate(_id, {
          showed_up,
        })
        return true
      } catch (err) {
        throw new Error(err)
      }
    },
  },
}

export default setAppointmentShowedUp
