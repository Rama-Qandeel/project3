const express = require("express");
const {getall}=require("./controller");
const authRouter=express.Router();

authRouter.get("/get", async (req, res) => {
    res.json("hi")
    try {
      res.json(await getall());
    } catch (err) {
      throw err;
    }
  });




  module.exports = authRouter;
