
const express = require("express");
const mongoose = require("mongoose");
const db = require("../config/db");




// for test use only
const Note = require('../models/note');

const testNote = new Note({
    title: "testNote Title2",
    body: "testNote Body2"
});

testNote.save().then(()=> console.log(testNote));

//test  code ends