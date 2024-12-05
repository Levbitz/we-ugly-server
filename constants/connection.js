// Function to connect to the database
import  {dbUrl } from './db.js'
import mongoose from "mongoose";




export const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbUrl, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true,
    });
    console.log("db is connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit the process if unable to connect to the database
  }
};
