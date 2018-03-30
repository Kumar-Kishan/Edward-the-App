require('./setUp')
const util = require('../../test/_util')
const knex = require('../../db')
const orderPromises = require('../../utilities').orderPromises
const createTestOutline = require('./createTestOutline')
const createTestPlan = require('./createTestPlan')
const createTestWorkshop = require('./createTestWorkshop')

const seedPromiseFns = []
const seedArgs = {
  '--delete': () => util.deleteTestUser(knex),
  '--user': () => util.createTestUser(knex),
  '--premium': () => util.makeTestUserPremium(knex),
  '--document': () => util.createTestDocument(knex),
  '--chapter': () => util.createTestChapter(knex),
  '--outline': () => createTestOutline(knex),
  '--plan': () => createTestPlan(knex),
  '--workshop': () => createTestWorkshop(knex),
  '--reset-key': () => util.setTestUserResetKey(knex),
  '--verify-key': () => util.setTestUserVerifyKey(knex)
}

process.argv.slice(2).forEach((val) => {
  if (!Object.keys(seedArgs).includes(val)) {
    throw new Error(`Invalid argument "${val}" to the seedData script.`)
  }

  seedPromiseFns.push(seedArgs[val])
})

orderPromises(seedPromiseFns).then(() => {
  process.exit()
}, err => {
  console.error(err)
  process.exit(1)
})
