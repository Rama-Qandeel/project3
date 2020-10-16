const express = require("express");
const {getall,register}=require("./controller");
const authRouter=express.Router();

authRouter.get("/get", async (req, res) => {
    // res.json("hi")
    try {
      res.json(await getall());
    } catch (err) {
      res.status(404)
      throw res.json("Data base not found");
    }
  });
//add new manager 
authRouter.post("/createmanager", async (req, res) => {
  try {
    res.json(await register(req.body));
  } catch (err) {
    throw err;
  }
});



  module.exports = authRouter;
