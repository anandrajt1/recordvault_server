const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema({
    name: String
  });

  const Batch = mongoose.model('Batch', batchSchema);

module.exports=Batch