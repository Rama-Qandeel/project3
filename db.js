const mongoose = require('mongoose');
require("dotenv").config()
const db = mongoose.connection;
mongoose.connection.id; 

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  _id:false
};

const DB_URL =process.env.DB_URL;

mongoose
  .connect(DB_URL, options)
  .then(() => {
    console.log('DB READY TO USE');
  })
  .catch((err) => {
    console.log('ERR: ', err);
  });

// These lines Extra
db.on('error', (err) => console.log('ERR:', err.message));

db.on('connected', () => console.log('MONGO CONNECTED'));

db.on('disconnected', () => console.log('MONGO DISCONNECTED'));

