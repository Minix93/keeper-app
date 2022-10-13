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
router.get("/", function(req, res, next) {


    Note.find({}).lean().exec((err, notes) =>{
        res.send(notes);
    });


});

/* DELETE note from databse by ID*/
router.delete("/:id", async function (req,res){
    const note = await Note.findByIdAndDelete(req.params.id);

    res.send("Deleted: " + note);
});




module.exports = router;