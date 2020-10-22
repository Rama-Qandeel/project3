const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const managerSchema = new mongoose.Schema({ 
    email: {type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true ,select:false},
    material:{  type:String},
    roleid:{type:Number,required: true,select:false}
  });
  const teacherSchema = new mongoose.Schema({ 
    email: {type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true ,select:false},
    material:{  type:String,  required: true},
    roleid:{type:Number,required: true,select:false}
  });
  // time:{type:String,required: true},
  const manager=mongoose.model('manager', managerSchema);
  const teacher=mongoose.model('teacher', managerSchema);

  module.exports = {
    manager,
    teacher
  }