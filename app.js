const express = require("express");
const bodyParser = require("body-parser");
const api = require("./routes/api");
const path = require("path");

require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/api",api);
app.use(express.static(path.join(__dirname, "client", "build")));


app.get("*", (req,res) =>{
  res.sendFile(path.join(__dirname, "client","build","index.html"));
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, function(){
  console.log("Server successfully started!");
});
