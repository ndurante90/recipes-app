const { MongoClient } = require('mongodb');
const connectionString  = process.env.ATLAS_URI || "";

module.exports = async function (){

    const mongoClient = await new MongoClient(connectionString);
    await mongoClient.connect();
    return mongoClient;
    
}