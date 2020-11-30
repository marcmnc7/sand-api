const express = require('express')
const router = express.Router()
const votesController = require('../controllers/votes')
const { allow } = require('../middlewares/allow')

router.get('/', allow(['*']), votesController.getAll)
router.get('/:id', allow(['*']), votesController.getOne)

router.post('/', allow(['*']), votesController.createOne)

module.exports = router
