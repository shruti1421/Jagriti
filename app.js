const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const dotenv= require("dotenv");
const morgan=require("morgan");
const app=express();
const ejs=require("ejs");
const path=require("path");
const connectDB = require('./server/database/connection.js');

dotenv.config({path: 'config.env'})
const PORT=process.env.PORT ||8080;


connectDB();

app.set('view engine', 'ejs');
app.set('views', 'public');
app.use(bodyParser.urlencoded({extended: true}));
//app.use(express.json());
app.use(express.static("public"));

//load routers
app.use('/',require("./server/routes/router"))

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});