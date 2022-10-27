const mongodb = require('mongodb')

const collections = {}

async function connectToMongo(uri) {
    const client = new mongodb.MongoClient(uri)
    client.connect()

    const db = client.db
}

module.exports = collections