const Vote = require('../database/models/vote')
const { AppError } = require('../lib/errors')

async function getOne (filters) {
  const votes = await Vote.find(filters)
  if (votes.length > 1) throw new AppError(500, 'More than one vote')
  return await votes[0]
}

async function getMany (filters) {
  return await Vote.find(filters)
}

async function createOne (newBeach) {
  return await Vote.create(newBeach)
}


module.exports = {
  getOne,
  getMany,
  createOne,
}
