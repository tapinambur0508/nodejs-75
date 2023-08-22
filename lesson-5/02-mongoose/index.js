require("dotenv").config();

const mongoose = require("mongoose");

const URI = process.env.DB_URI;

async function run() {
  try {
    await mongoose.connect(URI);

    console.log("Database connection successfully!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  } finally {
    mongoose.disconnect();
  }
}

run();
