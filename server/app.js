// Load environment variables
const enviroment = require("./loadEnvironment.js");
const getMongoClient = require("./db/conn.js");


const PORT = process.env.PORT || 5050;

let db;

const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/recipe/:id',async  (req,res) => {
  const collection = db.collection("recipes").find({ id: Number(req.params["id"]) });

  console.log( await collection.toArray());

  res.send('OK');

})

app.get('/recipes/list', async (req, res) => {

  const collection = db.collection("recipes").find();
  const results = collection;
  const arr = await results.toArray();

  arr.forEach((res) => console.log(res))

  res.send('OK');
})

app.listen(PORT, async () => {
  db = (await getMongoClient()).db("recipes-db");
  console.log(`Example app listening on port ${PORT}`)
})