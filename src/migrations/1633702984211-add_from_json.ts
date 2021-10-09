import path from 'path'
import fs from 'fs'
import moment from 'moment'
import { IClient } from '../models/client'
import { database } from '../index'

async function up() {
  const rawData = fs.readFileSync(path.resolve(__dirname, '../assets/clients.json'), 'utf-8')
  const clients = JSON.parse(rawData)
  const bulkOps = []

  const newFormatClients = clients.map((client) => {
    // JOHN TRAVOLTA -> John Travolta
    const name = client.name.split(' ').map((n: string) => n.charAt(0) + n.slice(1).toLowerCase()).join(' ') as string
    const dob = moment(client.birth, 'DD/MM/YYYY').toDate()
    const formated = {
      name,
      dob,
      email: client.email,
      phone: client.phone,
      address: {
        city: client.city,
        zipcode: client.postal,
        street: client.address,
      },
      advised_by: client.recommend,
      created_at: moment().toDate(),
    }
    return formated
  }) as IClient[]

  newFormatClients.forEach((client) => {
    bulkOps.push({
      insertOne: client,
    })
  })

  const Client = (await database).connection.collection('clients')

  await Client.bulkWrite(bulkOps, { ordered: true })

}
/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
async function down() {

  // Write migration here
}

export { up, down }
