const express = require("express");
const bcrypt = require("bcrypt");
const {db,roles}=require("./models");




const getall = () => {
      return db;
  };
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

  module.exports = {
      getall,
      register
    }