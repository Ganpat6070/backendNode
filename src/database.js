const mongoose = require("mongoose");
const express = require('express');


mongoose
  .connect(
    "mongodb+srv://ganpat:ganpat123@cluster0.yleqvvq.mongodb.net/ClientData"
    // "mongodb://127.0.0.1:27017/ClientDataTry"
  )
  .then(()=>{
    console.log('Connection Succesfull');
  }).catch((e)=>{
    console.log("Not Connected" + e);
  })
