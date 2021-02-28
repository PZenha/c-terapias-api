import { gql } from 'apollo-server-express'

const appointment = gql`

    type Appointment {
        _id: ID
        client_id: ID
        scheduled_to: Date
        created_at: Date
        showed_up: Boolean
    }

    extend type Query {
        findAppointmentByClient(client_id: ID): [Appointment]
        findAppointmentByTimeInterval(starts_at: Date, ends_at: Date): [Appointment]
    }

    extend type Mutation {
        createAppointment(client_id: ID, scheduled_to: Date): Appointment
        deleteAppointment(_id: ID): Boolean
        updateAppointment(_id: ID, scheduled_to: Date): Boolean
        setAppointmentShowedUp(_id: ID, showed_up: Boolean): Boolean
    }
`

export default appointment
