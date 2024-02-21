const mongoose = require('mongoose');

const recordSessionSchema = new mongoose.Schema({
    title: String,
    description:String,
    videoLink:String,
    password:String,
    date:Date,
    tags:String,
    batch:{
        type:mongoose.ObjectId,
        ref:'Batch'
    }


  });

  const RecordSession= mongoose.model('RecordSession', recordSessionSchema);



module.exports=RecordSession