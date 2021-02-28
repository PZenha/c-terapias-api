import { IResolvers } from 'graphql-tools'
import { ObjectId } from 'mongoose'
import Appointment from '../../../../models/appointment'

interface ICreateAppointmentInput {
    client_id: ObjectId,
    scheduled_to: Date
}

const CreateAppointment: IResolvers = {
  Mutation: {
    createAppointment: async (_, args: ICreateAppointmentInput) => {
      const appointment = await Appointment.create({
        client_id: args.client_id,
        scheduled_to: args.scheduled_to,
        created_at: new Date(),
      })
      console.log(appointment)
      return appointment
    },
  },
}

export default CreateAppointment
