const express = require("express");
const app = express();
const router=require("./mainRouter")
app.use(express.json())
app.use(router)









const port=3000
app.listen(port, () => {
  console.log(`project333 http://localhost:${port}`);
});
