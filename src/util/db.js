import PouchDB from 'pouchdb'
import PouchAuth from 'pouchdb-authentication'
import { dbUrl } from '../../config.js'

PouchDB.plugin(PouchAuth)

export function createDB(name) {
  return new PouchDB(`${dbUrl}/${name}`)
}


