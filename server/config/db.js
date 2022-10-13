const express = require("express");
const mongoose = require("mongoose");



const app = express();


mongoose.connect('mongodb://localhost:27017/test');

const db = mongoose.connection;

module.exports = db;


