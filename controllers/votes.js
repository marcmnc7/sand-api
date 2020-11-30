const voteService = require('../services/vote')

async function getAll (req, res, next) {
  try {
    const votes = await voteService.getMany({})
    return res.json(votes)
  } catch (error) {
    next(error)
  }
}

async function getOne (req, res, next) {
  try {
    const { id } = req.params
    const vote = await voteService.getOne({ _id: id })
    return res.json(vote)
  } catch (error) {
    next(error)
  }
}

async function createOne (req, res, next) {
  try {
    const { body } = req
    const vote = await voteService.createOne(body)
    return res.json(vote)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAll,
  getOne,
  createOne,
}
