import express from "express";
import { Register, Login, Alluser } from "../Controller/UserController.js";
const Route = express.Router();

Route.post("/register", Register);
Route.post("/login", Login);
Route.get("/alluser/:user_name", Alluser);
export default Route;
/*
hum esi ko bolta hai controller bcz sab kuch yahi sa controle hot hai 
 (req, res, next) => {
  console.log(req.body);
  res.json({
    status: true,
    msg: "User registered successfully",
  });
} 
*/
