const {db,roles}=require("./models");




const getall = (path) => {
    console.log("path", path);
    if (path === "/manger/get") {
      const manager = managers.filter((user) => user.roleId === 1);
      if (manager) {
        return { managers: manager };
      }
    } else if (path === "/teacher/get") {
      const student = managers.filter((user) => user.roleId === 3);
      if (student) {
        return { students: student };
      } else {
        return "you are student can not access";
      }
    }
  };





  module.exports = {
      getall
    }