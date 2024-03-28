// to connect with the mongodb we need to import mongoese

import mongoose from "mongoose";
// console.log(mongoose);
// this is the url of mongodb to connect whatsappchat is name of connection
const mongodb_url = "mongodb://localhost:27017/WhatsappChat";

const connectdb = async () => {
  try {
    // console.log(mongoose.connect(mongodb_url));
    await mongoose.connect(mongodb_url);
    console.log("mongodb connected");
  } catch (err) {
    console.log(err.message);
  }
};

// we need to tell all file we can use this for that we need to export that file

export default connectdb;
