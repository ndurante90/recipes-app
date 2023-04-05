// Load environment variables
const enviroment = require("./loadEnvironment.js");
const db = require("./db/conn.js");
const express = require('express');
const PORT = process.env.PORT || 5050;
const app = express();


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/recipes/list', (req, res) => {
   const recipes = db.getCollection('recipes').find({});
   
   while (recipes.hasNext()) {
      print(JSON.stringify(recipes.next()));
   }
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})