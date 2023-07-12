const { MongoClient } = require('mongodb');
const { DB_CONNECTION_STRING, DB_NAME, DB_COLLECTION } = require('./config');

const client = new MongoClient(DB_CONNECTION_STRING, {
    connectTimeoutMS: 30000,
    socketTimeoutMS: 60000,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connectToDatabase = async () => {
    await client.connect();
    return client.db(DB_NAME)
};

const saveDataToMongoDB = async (db, data) => {
    const collection = db.collection(DB_COLLECTION);
    await collection.insertMany(data)
};

module.exports = {connectToDatabase, saveDataToMongoDB}