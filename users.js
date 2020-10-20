const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const managerSchema = new mongoose.Schema({ 
    email: {type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true ,select:false},
    roleid:{type:Number,required: true,select:false}
  });
  
  const manager=mongoose.model('manager', managerSchema);


  module.exports = {
    manager
  }