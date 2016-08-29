const PouchDB = require('pouchdb')
const PouchAuth = require('pouchdb-authentication')
const { dbUrl } = require('../config')

PouchDB.plugin(PouchAuth)
const couchUser = process.env.COUCH_USER
const couchPass = process.env.COUCH_PASS

if(!couchUser || !couchPass) {
  throw new Error(`Expected COUCH_USER and COUCH_PASS to be set!`)
}

const db = new PouchDB(`${dbUrl}/students`)
const json = process.argv[2] || ''
const {
  name='name',
  password='password',
  email='default@email.com',
  fullName='Full Name',
  year=1
} = JSON.parse(json)

db.login(couchUser, couchPass)
  .then(() => db.signup(name, password, { roles: ['student'] }))
  .then(student => db.put({
    _id: name,
    studentId: student._id,
    name: fullName,
    competencies: {},
    year,
    email
  }))
  .then(doc => console.log('Saved student'))
  .catch(err => console.error(err))

