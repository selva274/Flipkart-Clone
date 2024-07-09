
const express=require('express');
const app=express();
const mongoose = require('mongoose');
const cors=require('cors');
const AllUsers=require('./Protocols/getAllUsersSchema')
const body_parser=require('body-parser');
app.use(express.json());
app.use(body_parser.urlencoded({extended:true}))
app.use(body_parser.json());
app.use(cors());
const db = require('./Database/db');

app.get('/users',(req,res)=>{
    AllUsers.find({}).then((data)=>res.send(data))
})

app.get('/users/:name',(req,res)=>{
    const name=req.params.name;
    AllUsers.findOne({username:name}).then((data)=>res.send(data))
})


app.listen(3000,()=>{
    console.log("Server Connected...");
})
