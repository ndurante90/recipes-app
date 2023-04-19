const express=require('express');
const getMongoClient = require('../db/conn');
const router = express.Router();

let db;

router.use(async (req, res, next) => {
    console.log("Middleware 1 called.")
    db = (await getMongoClient()).db("recipes-db");
    next() // calling next middleware function or handler
})

router.get('/list/', async (req, res, next) => {
   try{
    const collection = db.collection("ingredients").find();
    const results = collection;
    const arr = await results.toArray();
    //throw new Error("Crachadasd");
    arr.forEach((res) => console.log(res));
  
   res.json(arr); 
   }catch(error){
    next(error)
   }
   
});

module.exports = router;