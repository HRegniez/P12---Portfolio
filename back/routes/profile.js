const express = require('express')
const { getLanguages} = require('../controllers/profileLanguagesController')
const { getTechs } = require('../controllers/profileTechsController.js')

const router = express.Router()

router.get('/languages', getLanguages)
router.get('/techs', getTechs)


module.exports = router