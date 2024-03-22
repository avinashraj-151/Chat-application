import express from "express";
import { Addmessage, Getmessage } from "../Controller/MessageController.js";
const route = express.Router();

route.post("/addmessage", Addmessage);
route.post("/getmessage", Getmessage);

export default route;
