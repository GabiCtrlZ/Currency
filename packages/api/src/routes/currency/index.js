const express = require('express')

const getCycles = require('./get-cycles')

const router = express.Router()

router.get('/get-cycles', [], getCycles)

module.exports = router
