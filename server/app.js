// Load environment variables
const cors=require('cors');
const enviroment = require("./loadEnvironment.js");
const getMongoClient = require("./db/conn.js");
const seedDatabase = require("./db/seed.js");
const PORT = process.env.PORT || 5050;
const express = require('express');
const app = express();
app.use(cors());
const ingredientsRoutes = require('./routes/ingredients.js');
const errorsHandlers = require('./errors-handlers.js');

let db;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/recipe/:id',async  (req,res) => {
  const collection = db.collection("recipes").find({ id: Number(req.params["id"]) });

  console.log( await collection.toArray());

  res.send('OK');

})

app.get('/recipes/', async (req, res, next) => {
  try{
    const collection = db.collection("recipes").find();
    //throw new Error("Codice crashato");
    const results = collection;
    const arr = await results.toArray();
  
    arr.forEach((res) => console.log(res));
  
    res.json(arr); 
  }catch(error){
     next(error)
  }
})

app.use("/ingredients", ingredientsRoutes);

app.use(errorsHandlers);

app.listen(PORT, async () => {
  
  // Seed Database
  await seedDatabase();

  //Connect to MongoDB
  db = (await getMongoClient()).db("recipes-db");

  console.log(`Example app listening on port ${PORT}`)
})