const express = require("express");
const bcrypt = require("bcrypt");
const jwt_decode = require("jwt-decode");
const jwt = require("jsonwebtoken");
const { db, roles } = require("./models");
const { JsonWebTokenError } = require("jsonwebtoken");
const { options } = require("./mainRouter");

const getall = (user, headers) => {
  // console.log("user", user);
  // console.log('token',headers.authorization);
  const token = headers.authorization.split(" ").pop();
  const decode = jwt_decode(token);
  // console.log('decode',decode);

  if (decode.id === 1) {
    return db;
  } else if (decode.id === 2) {
    const student = db.filter((user) => user.roleId === 3);
    student.forEach((student) => {
      delete student.password;
      delete student.roleId;
    });

    return { students: student };
  } else {
    let result = [user.material];
    db.forEach((m) => {
      if (m.material == user.material) {
        const time = { username: m.username, time: m.time };
        result.push(time);
      }
    });
    return result;
  }
};

//************************************************************* */
// just manager reg
const register = async (user) => {
  const newuser = db.filter((manager) => manager.email === user.email);
  if (!newuser.length) {
    user.password = await bcrypt.hash(user.password, Number(process.env.SALT));
    user.roleId = 1;
    db.push(user);
    // return "new manager has been created";
    return user;
  } else {
    return "user already exists";
  }
};

//************************************************************* */
// for all
const login = async (user) => {
  const savedUser = db.filter((u) => u.email == user.email);
  console.log("user", savedUser[0]);
  if (savedUser.length) {
    if (await bcrypt.compare(user.password, savedUser[0].password)) {
      const permissions = roles.filter(
        (role) => role.id === savedUser[0].roleId
      );
      const payload = {
        email: savedUser[0].email,
        permissions: permissions[0].permissions,
        id: permissions[0].id,
      };
      // console.log("pay",payload)
      const options = {
        expiresIn: process.env.TOKEN_EXPIRATION,
      };

      console.log("process.env.SECRET", process.env.SECRET);

      return await jwt.sign(payload, process.env.SECRET, options);
    } else {
      return "Invalid login check your password";
    }
  } else {
    return "Invalid login check your email";
  }
};

//************************************************************* */
const adduser = async (user) => {
  // console.log("user", user);
  // console.log("user.password", user.password);
  const newuser = db.filter((u) => u.email === user.email);
  if (!newuser.length) {
    user.password = await bcrypt.hash(user.password, Number(process.env.SALT));
    db.push(user);
    return "new user has been created";
  } else {
    return "user already exists";
  }
};

//************************************************************ */
const deleteuser = (user) => {
  const deletuser = db.filter((u) => u.email == user.email);
  if (deletuser.length) {
    // return deleteuser
    return "The user was deleted";
  } else {
    return "The user not defined";
  }
};

//************************************************************* */
const updateinfo = (user) => {
  let add = db.filter((teacher) => {
    return teacher.email == user.email;
  });
  if (add) {
    db.forEach((teacher, i) => {
      if (teacher.email == user.email) {
        db[i].material = user.material;
        db[i].time = user.time;
      }
    });
  }
  return "The information was added successfully";
};

//************************************************************* */

const search = (user) => {
  const getinformation = db.filter(
    (u) => u.username == user.username && u.email == user.email
  );
  // console.log('getinformation',getinformation);

  if (getinformation.length) {
    return {
      username: getinformation[0].username,
      class: getinformation[0].class,
    };
  }
  {
    return "not found";
  }
};

module.exports = {
  getall,
  register,
  login,
  adduser,
  deleteuser,
  updateinfo,
  search,
};
