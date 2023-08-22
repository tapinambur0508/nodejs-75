const { MongoClient } = require("mongodb");

const URI =
  "mongodb+srv://nodejs:G5SRdqr4DEroKtZw@cluster0.x2hbpsl.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(URI);

async function run() {
  try {
    await client.connect();

    const db1 = client.db("sample_mflix");
    const db2 = client.db("sample_airbnb");

    const collections1 = await db1.listCollections().toArray();
    console.log(collections1);

    const collections2 = await db2.listCollections().toArray();
    console.log(collections2);
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    client.close();
  }
}

run();
