require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const Batch=require('./models/batchModel')
const batchRoutes=require('./routes/batchRoutes')
const app = express()
const port = 8080

app.use(express.json()) //to get the body of any req comming

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//to use routes
app.use('/batch',batchRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

main().then(console.log("db connected")).catch(err => console.log(err));

async function main() {
    const dbUrl=process.env.DB_URL
  await mongoose.connect(dbUrl);
}