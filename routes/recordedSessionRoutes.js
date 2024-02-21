const express = require('express')

const { getAllRecordedSessions, addNewRecordedSession } = require('../controllers/recordedSessionController')
const router = express.Router()


//get all recourdedSessions
router.get('/', getAllRecordedSessions)
//add a new recrdedsession
router.post('/', addNewRecordedSession)


module.exports = router