// Mongoose is an Object Data Modeling (ODM) library for MongoDB
import mongoose from "mongoose";

//hama ko secheme define karna padega maina galti ki ma na new nahi use kiya hamko new use karna padega to create a new obect of the data model
const UserScheme = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 4,
    max: 20,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});
//  It allows you to interact with documents in that collection using an object-oriented interface.
const UserModel = mongoose.model("User", UserScheme);

export default UserModel;
