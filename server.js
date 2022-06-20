const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.static(__dirname))

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});
const port = process.env.PORT || 3000
app.listen(port, err => {
  if(err)
    throw err;
})