import path from 'path'
import { MONGODB_URI } from './config'

process.env.MIGRATE_dbConnectionUri = MONGODB_URI
process.env.MIGRATE_collectionName = 'migrations'
process.env.MIGRATE_autosync = 'true'
process.env.MIGRATE_md = path.join(__dirname, './migrations')

require('migrate-mongoose/src/cli')
