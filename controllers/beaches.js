const beachService = require('../services/beach')

async function getAll (req, res, next) {
  try {
    const beaches = await beachService.getMany({})
    return res.json(beaches)
  } catch (error) {
    next(error)
  }
}

async function getOne (req, res, next) {
  try {
    const { id } = req.params
    const beach = await beachService.getOne({ _id: id })
    return res.json(beach)
  } catch (error) {
    next(error)
  }
}

async function createOne (req, res, next) {
  try {
    const { body } = req
    const beach = await beachService.createOne(body)
    return res.json(beach)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAll,
  getOne,
  createOne,
}
