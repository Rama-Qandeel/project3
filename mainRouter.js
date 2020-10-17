const express = require("express");
const {getall,register,login,adduser,deleteuser,updateinfo}=require("./controller");
const authRouter=express.Router();
const{ middleware,middleware2,middleware3}=require("./middleware")


// authRouter.get("/getall",async (req, res) => {
//     // res.json("hi")
//     try {
//       res.json(await getall());
//     } catch (err) {
//       res.status(404)
//       throw res.json("Data base not found");
//     }
//   });
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
//********************************************************* */
authRouter.get("/protect",middleware ,async (req, res) => {
  try {
    res.json(await getall(req.body));
  } catch (err) {
    res.status(404)
    throw res.json("Data Base not found");
  }
});
//********************************************************* */
authRouter.post("/protect/creatuser",middleware2,async (req, res) => {
  try {
    res.json(await adduser(req.body));
    // res.json("hiiiiiiiiiiiiiiiiiiiiiiii")
  } catch (err) {
    throw err;
  }
});

//****************************************************** */
authRouter.delete("/protect/deleteuser",middleware2 ,async (req, res) => {
  try {
    res.json(await deleteuser(req.body));
  } catch (err) {
    throw err;
  }
});
//********************************************************** */
authRouter.put("/protect/update",middleware3,async (req, res, next) => {

  try {
    res.json(await updateinfo(req.body));
  } catch (err) {
    throw err;
  }
});
//********************************************** */


  module.exports = authRouter;
