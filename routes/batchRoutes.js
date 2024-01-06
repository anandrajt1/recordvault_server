const express = require('express')
const Batch = require('../models/batchModel')
const {getAllBatches,addNewBatch}=require('../controllers/batchController')
const router = express.Router()


// get all batches || GET
router.get('/',getAllBatches)

//add a new batch || POST
router.post('/',addNewBatch)


module.exports = router