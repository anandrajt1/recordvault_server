const Batch = require('../models/batchModel');
const RecordSession = require('../models/recordedSessionModel');

const getAllBatches = [
  (req, res, next) => {
    const cookies = req.cookies;

    if (!cookies.token) {
      return res.status(401).send("Unauthorized Access");
    }
    next();
  },
  async (req, res) => {
    const batches = await Batch.find();
    res.status(200).json(batches);
  }
];

const addNewBatch = async (req, res) => {
  const data = req.body;
  const batch = new Batch(data);
  await batch.save();
  res.status(201).json(batch);
};

const getRecordedSessionByBatchId = [
  (req, res, next) => {
    // Middleware to verify the user
    const cookies = req.cookies;
    // console.log(cookies)
    if (!cookies.token) {
      return res.status(401).send("Unauthorized Access");
    }
    next();
  },
  async (req, res) => {
    const recordedSessions = await RecordSession.find({ batch: req.params.batchId });
    res.status(200).json(recordedSessions);
  }
];

module.exports = { getAllBatches, addNewBatch, getRecordedSessionByBatchId };

