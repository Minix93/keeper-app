/**
 * Defines the database model to store the notes
 * @type {e | (() => Express)}
 */

const express = require("express");
const mongoose = require("mongoose");

const { Schema} = mongoose;

const noteSchema = new Schema({
    title: String,
    body : String
});

const Note = mongoose.model("Note", noteSchema);


module.exports = Note;

