const express = require("express");
const {db,roles}=require("./models");




const getall = () => {
      return db;
  };





  module.exports = {
      getall
    }