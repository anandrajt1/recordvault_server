const getAllBatches=async (req, res) => {
    const batches=await Batch.find()

  res.status(200).json(batches)
}

const addNewBatch=async (req, res) => {
    const data=req.body
    const batch=new Batch(data)
    await batch.save()
    res.status(201).json(batch)
 }
 
 module.exports={getAllBatches,addNewBatch}
