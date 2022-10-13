const express = require("express");
const mongoose = require("mongoose");



const app = express();


mongoose.connect("mongodb+srv://Minix93:zUQeyH4R65UglARy@cluster0.ghcvpxo.mongodb.net/keeper?retryWrites=true&w=majority");

const db = mongoose.connection;

module.exports = db;


