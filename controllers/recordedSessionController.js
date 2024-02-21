const RecordedSession=require('../models/recordedSessionModel')

const getAllRecordedSessions= async(req, res) => {
    const recordedSessions=await RecordedSession.find()
    res.status(200).json(recordedSessions)
  }

const addNewRecordedSession= async(req, res) => {
    const data=req.body
    const recordedSession=new RecordedSession(data)
    await recordedSession.save()
    res.status(201).json(recordedSession)
   }  

   module.exports={getAllRecordedSessions,addNewRecordedSession}