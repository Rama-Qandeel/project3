const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const managerSchema = new mongoose.Schema({ 
    email: {type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    roleid:{type:Number,required: true}
  });
  const teacherSchema = new mongoose.Schema({ 
    email: {type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true ,select:false},
    material:{  type:String,  required: true},
    time:{  type:String},
    roleid:{type:Number,required: true,select:false}
  });
  const studentSchema = new mongoose.Schema({ 
    email: {type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true ,select:false},
    class:{  type:String,  required: true},
    roleid:{type:Number,required: true,select:false}
  });

  const manager=mongoose.model('manager', managerSchema);
  const teacher=mongoose.model('teacher', teacherSchema);
  const student=mongoose.model('student', studentSchema);

  module.exports = {
    manager,
    teacher,
    student
  }