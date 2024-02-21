const express = require('express')

const {getAllBatches,addNewBatch, getRecordedSessionByBatchId}=require('../controllers/batchController')
const router = express.Router()


// get all batches || GET
router.get('/',getAllBatches)

//add a new batch || POST
router.post('/',addNewBatch)

//get recordedsession of a particular batch
router.get('/:batchId/recordedsessions',getRecordedSessionByBatchId)


module.exports = router