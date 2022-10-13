const express = require("express");
const mongoose = require("mongoose");



const app = express();


mongoose.connect('mongodb://localhost:27017/test');


// for test use only
const Note = require('../models/note');

const testNote = new Note({
    title: "testNote Title",
    body: "testNote Body"
});

testNote.save().then(()=> console.log(testNote));

//test  code ends
