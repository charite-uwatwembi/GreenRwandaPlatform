const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require ('mongoose') 

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));


// Connect to MongoDB without deprecated options
const uri = "mongodb://localhost:27017/GREENRWANDAPLATFORM";


app.get("/", (req, res)=>{
  res.status(200).json({
    "name":"hello",

  })
})


// Database name
const dbName = 'jobListings';

// Collection name
const collectionName = 'jobs';

// Route to add a job
app.post('/addJob', (req, res) => {
 const job = req.body;
 client.db(dbName).collection(collectionName).insertOne(job, (err, result) => {
    if (err) {
      console.error("Error adding job:", err);
      res.status(500).send('Error adding job');
    } else {
      res.send('Job added successfully');
    }
 });
});

// Route to get all jobs
app.get('/getJobs', (req, res) => {
 client.db(dbName).collection(collectionName).find({}).toArray((err, jobs) => {
    if (err) {
      console.error("Error fetching jobs:", err);
      res.status(500).send('Error fetching jobs');
    } else {
      res.send(jobs);
    }
 });
});

// Gracefully shut down the server and MongoDB connection
process.on('SIGINT', () => {
 console.log('Shutting down server and MongoDB connection');
 client.close();
 process.exit(0);
});

app.listen(port, async() => {
  console.log(`Server running on port ${port}`);
  connectdb()
});

 async function connectdb (){
  try{
    await mongoose.connect(uri);
    console.log('db connected!')
  }catch(err){
    console.log(err);

  }
}