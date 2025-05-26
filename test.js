const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://moam1986:online@mycluster.tvdiyu4.mongodb.net/?retryWrites=true&w=majority&appName=myCluster";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    let databaseName= 'test';
    let databaseCollectionName= 'col1';
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    //await client.db(databaseName).command({ ping: 1 });
    const database = client.db(databaseName); // ✅ This is the actual DB object
    await database.command({ ping: 1 }); 
    const collection = database.collection(databaseCollectionName);

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
//ssss
run().catch(console.dir);
//dssdsddsds
/*
const { MongoClient, ServerApiVersion } = require('mongodb');
//const uri = 'mongodb://127.0.0.1:27017'; 
const username = encodeURIComponent("admin");
const password = encodeURIComponent("admin");
const cluster = "clu1";;
const authSource = "<authSource>";
const authMechanism = "<authMechanism>";

const uri =`mongodb+srv://${username}:${password}@${cluster}/?authSource=${authSource}&authMechanism=${authMechanism}`;



//const client = new MongoClient(uri);
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const client = new MongoClient(uri, {serverApi: {version: ServerApiVersion.v1,strict: true,deprecationErrors: true,}});

console.log('MongoDB client created');
async function run() {
    try {
      // Connect to the MongoDB server
      await client.connect();
      console.log('Connected successfully to MongoDB');
      let databaseName= 'test';
      //let databaseName= 'admin';
      let collectionName= 'col1';
      //let collectionName= 'myCluster';
      // Specify the database and collection
      //const database = client.db(databaseName);
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
      
      const collection = database.collection(collectionName);
      
      await collection.insertOne({ name: 'Alice', age: 25 });
      await collection.insertOne({ name: 'Mohammed', age: 38 });
      await collection.updateOne({ name: 'Alice' }, { $set: { age: 26 } });
      await collection.deleteOne({ name: 'Alice' });

      // Query: Find all documents
      const documents = await collection.find({}).toArray();
  
      console.log('Documents:', documents);
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
    } finally {
      // Ensure the client is closed when finished/error
      await client.close();
    }
}

// Run the async function
run();


let test={'name':'mohammed','status':false};

let func1 = function(value){
    console.log(value.name)
}
func1(test);

let fp = new Promise((resolve, reject) => {
    if(test.status) {
        resolve("Promise resolved after 2 seconds");
    }
    else {
        reject("Promise rejected");
    }
})
.then((message) => {console.log(message);})
.catch((error) => {
    console.error(error);
});

*/