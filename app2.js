const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
const mongoose=require("mongoose");
app.use(express.static("public"));

mongoose.connect("mongodb+srv://shreya:abcd@cluster0.gldec.mongodb.net/shoppingdb",{useNewUrlParser:true, useUnifiedTopology:true});
const shopSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  phoneno:{
    type: String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  details:{
    type:String,
    required:true
  },
   address:{
    type:String,
    required:true
  }
});

const Shopping=mongoose.model("Shopping",shopSchema);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port,function(){
  console.log("servor is running successfully")
});
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index3.html")
});
app.post("/",function(req,res){
  var namez=req.body.name;
  var pho=req.body.phoneno;
  var det=req.body.details;
var emailz=req.body.email;
var addres=req.body.address;
const shopping=new Shopping({
  name:namez,
  phoneno:pho,
     email:emailz,
  details:det,
  address:addres
})
shopping.save();
res.send("Done thanks for purchasing Further you will get confirmation mail of your order.");
});
