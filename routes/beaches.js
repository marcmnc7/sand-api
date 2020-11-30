const express = require('express')
const router = express.Router()
const beachesController = require('../controllers/beaches')
const { allow } = require('../middlewares/allow')

router.get('/', allow(['*']), beachesController.getAll)
router.get('/:id', allow(['*']), beachesController.getOne)

router.post('/', allow(['*']), beachesController.createOne)

module.exports = router
