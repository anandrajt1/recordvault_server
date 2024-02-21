require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const mongoose = require('mongoose');

const batchRoutes=require('./routes/batchRoutes')
const recordedSessionRoutes=require('./routes/recordedSessionRoutes')
const userRoutes=require('./routes/userRoutes')


const app = express()
const port = 8080

app.use(cors({
  origin:['http://localhost:3000'],
  credentials:true
}))
app.use(cookieParser())
app.use(express.json()) //to get the body of any req comming

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//to use routes
app.use('/batches',batchRoutes)
app.use('/recordedSessions',recordedSessionRoutes)
app.use('/users',userRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

main().then(console.log("db connected")).catch(err => console.log(err));

async function main() {
    const dbUrl=process.env.DB_URL
  await mongoose.connect(dbUrl);
}