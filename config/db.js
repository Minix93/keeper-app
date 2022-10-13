const express = require("express");
const mongoose = require("mongoose");



const app = express();


mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

module.exports = db;


