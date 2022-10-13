var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = require("../config/db");
const Note = require("../models/note");

const app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

/* GET notes from database */
router.get("/", async function(req, res, next) {


    await Note.find({}).lean().exec((err, notes) =>{
        res.send(notes);
    });


});

/* DELETE note from databse by ID*/
router.delete("/:id", async function (req,res){
    const note = await Note.findByIdAndDelete(req.params.id);

    res.send("Deleted: " + note);
});


/* POST new notes to database*/
router.post("/", async function(req,res){
    const inputContent = req.body;
    const newNote = new Note({
        title: inputContent.title,
        body: inputContent.body
    });
    await newNote.save(function (err,note){
        res.send(note._id);
    });

})

module.exports = router;