const PouchDB = require('pouchdb')
const PouchAuth = require('pouchdb-authentication')
const { dbUrl } = require('../config')

PouchDB.plugin(PouchAuth)
const username = process.env.COUCH_USER
const password = process.env.COUCH_PASS

if(!username || !password) {
  throw new Error(`Expected COUCH_USER and COUCH_PASS to be set!`)
}

const competenciesDB = new PouchDB(`${dbUrl}/competencies`)
const studentsDB = new PouchDB(`${dbUrl}/students`)
const staffDB = new PouchDB(`${dbUrl}/staff`)

const competencies = [
  { _id: '#general4', name: 'General 4', year: 1, outcomes: [] },
  { _id: '#general5', name: 'General 5', year: 1, outcomes: [] },
  { _id: '#general6', name: 'General 6', year: 2, outcomes: [] },
  { _id: '#general7', name: 'General 7', year: 2, outcomes: [] }
]

const students = [
  { _id: '@frodo', name: 'Frodo Baggins', year: 1, competencies: {} },
  { _id: '@sam', name: 'Samwise Gamgee', year: 1, competencies: {} },
  { _id: '@merry', name: 'Meriadoc Brandybuck', year: 2, competencies: {} },
  { _id: '@pippin', name: 'Peregrin Took', year: 3, competencies: {} }
]

const staff = [
  { _id: '@gandalf', name: 'Gandalf the Grey' },
  { _id: '@saruman', name: 'Saruman the White' },
  { _id: '@radagast', name: 'Radagast the Brown' },
]

const users = [

]

competenciesDB.login(username, password)
  .then(user => competenciesDB.bulkDocs(competencies))
  .then(users => console.log(users))
  .catch(err => console.error( err ))

