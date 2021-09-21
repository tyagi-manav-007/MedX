const express=require("express");
const ejs=require("ejs");
const bodyParser=require("body-parser");
const https=require("https");

const app=express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res) {
  res.render("index");
});

app.listen(3000 || process.env.PORT, function() {
  console.log("Server started at port 3000");
});
