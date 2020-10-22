const jwt = require("jsonwebtoken");

const middleware = async (req, res, next) => {
  if (!req.headers.authorization) {
    res.send("login first");
  }
  const token = req.headers.authorization.split(" ").pop();
  jwt.verify(token, process.env.SECRET, (err, parsedToken) => {
    //  console.log('parsedToken.id',parsedToken.id);
    //  console.log('error',err);
    if (err == null) {
      const r = parsedToken.roleid;
      if (r !== 1 && r !== 2 && r !== 3) {
        res.status(403);
        res.send("you cant access ");
        next();
      }
    }
    if (err) res.send("Login failed. Please re-enter your name and password");
    {
    }
    if (parsedToken) {
      next();
      return;
    }
  });
};

//************************************************************* */
const middleware2 = async (req, res, next) => {
  if (!req.headers.authorization) {
    res.send("login first");
  }
  const token = req.headers.authorization.split(" ").pop();
  jwt.verify(token, process.env.SECRET, (err, parsedToken) => {
    if (err == null) {
      const r = parsedToken.roleid;
      if (r !== 1 && r !== 2) {
        res.status(401);
        res.send("you can not add new user or delete");
        next();
      }
    }
    if (err) res.send("Login failed. Please re-enter your name and password");
    {
    }
    if (parsedToken) {
      next();
      return;
    }
  });
};

//************************************************************* */
const middleware3 = async (req, res, next) => {
  if (!req.headers.authorization) {
    res.send("login first");
  }
  const token = req.headers.authorization.split(" ").pop();
  jwt.verify(token, process.env.SECRET, (err, parsedToken) => {
    if (err == null) {
      const r = parsedToken.roleid;
      if (r !== 1) {
        res.status(401);
        res.send(
          "you can not update informatin or delete ") 
           
     
        next();
      }
    }
    if (err) { 
      res.send("Login failed. Please re-enter your name and password");
    }
    if (parsedToken) {
      next();
      return;
    }
  });
};

//************************************************************* */

module.exports = {
  middleware,
  middleware2,
  middleware3,
};
