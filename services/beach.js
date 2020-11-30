const Beach = require('../database/models/beach')
const { AppError } = require('../lib/errors')

async function getOne (filters) {
  const beaches = await Beach.find(filters)
  if (beaches.length > 1) throw new AppError(500, 'More than one user')
  return beaches[0]
}

async function getMany (filters) {
  return await Beach.find(filters)
}

async function createOne (newBeach) {
  return await Beach.create(newBeach)
}


module.exports = {
  getOne,
  getMany,
  createOne,
}
