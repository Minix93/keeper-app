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
    // res.json({
    //     key: 4,
    //     title: "This note data sends from Server",
    //     content:
    //         "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
    // });

    Note.find({}).lean().exec((err, notes) =>{
        res.send(notes);
    });


});

module.exports = router;