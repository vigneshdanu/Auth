const express= require("express");  
const mongoose =require("mongoose");
const authRoute  =require('./routes/auth');
const jwt = require("jsonwebtoken"); 





const app=express();


const dbURI="mongodb://localhost/authentication";
app.use(express.json());
app.use(express.urlencoded());
app.use('/api/auth',authRoute);

mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true});
const db= mongoose.connection;

db.on("error",(err)=>{console.error(err)})
db.once("open",()=>{console.log("Mongodb connected successfully")});

app.listen(8080,()=>{
    console.log("server started 8080");
})