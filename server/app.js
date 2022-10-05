const express = require("express");
const bodyParser = require("body-parser");
const api = require("./routes/api");

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/api",api);


app.listen(3001, function(){
  console.log("Server successfully started at port 3001");
});
