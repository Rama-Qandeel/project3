const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {db,roles}=require("./models");
const { JsonWebTokenError } = require("jsonwebtoken");
const { options } = require("./mainRouter");




const getall = (user) => {  
  console.log('user',user);
  
  const dball=db.filter((u)=>u.email==user.email)
      if (dball[0].roleId===1){  
        return db;}
        
       else if (dball[0].roleId===2){ 
        const student = db.filter((user) => user.roleId === 3);
        student.forEach((student) => {
          delete student.password;
          delete student.roleId;
        });
        
      return { students: student };
      }
      else{
        let result = [user.material];
        db.forEach((m) => {
          if (m.material == user.material) {
            const time = { username: m.username, time: m.time };
            result.push(time);
          }
      })
return result
    }
  }


//***************************************************************** */
// just manager reg
const register = async (user) => {
    const newuser = db.filter((manager) => manager.email === user.email);
    if (!newuser.length) {
      user.password = await bcrypt.hash(
        user.password,
        Number(process.env.SALT)
      );
      user.roleId = 1;
     db.push(user);
      // return "new manager has been created";
      return user
    } else {
      return "user already exists";
    }
  
  };
//************************************************************* */
  // for all
const login = async (user) => {
  const savedUser = db.filter((u) => u.email == user.email);
  console.log("user",savedUser[0])
  if (savedUser.length) {
    if (await bcrypt.compare(user.password, savedUser[0].password)) {

    const permissions = roles.filter((role) => role.id === savedUser[0].roleId);
    const payload = {
      email: savedUser[0].email,
      permissions: permissions[0].permissions,
      id:permissions[0].id
    }
    // console.log("pay",payload)
    const options = {
      expiresIn: process.env.TOKEN_EXPIRATION,
    };

    console.log('process.env.SECRET',process.env.SECRET);
  
    
    return await jwt.sign(payload,process.env.SECRET,options)
    }
    else{
      return "Invalid login check your password"
    }

  }
else { return "Invalid login check your email";
}

}

module.exports = {
      getall,
      register,
      login
    }