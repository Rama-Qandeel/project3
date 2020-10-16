const express = require("express");
const {getall,register,login}=require("./controller");
const authRouter=express.Router();
const middleware=require("./middleware")


authRouter.get("/getall",async (req, res) => {
    // res.json("hi")
    try {
      res.json(await getall());
    } catch (err) {
      res.status(404)
      throw res.json("Data base not found");
    }
  });
//add new manager 
authRouter.post("/register", async (req, res) => {
  try {
    res.json(await register(req.body));
  } catch (err) {
    throw err;
  }
});
//************************************************************** */
//for all
authRouter.get("/login", async (req, res) => {
  try {
    res.json(await login(req.body));
  } catch (err) {
    throw err;
  }
});
authRouter.get("/protect",middleware ,async (req, res) => {
  // res.json("hi")
  try {
    res.json(await getall());
  } catch (err) {
    res.status(404)
    throw res.json("Data base not found");
  }
});



  module.exports = authRouter;
