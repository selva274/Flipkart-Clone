
const express = require('express');

const app=express();
module.exports=()=>{app.listen(3000,()=>{
    console.log("server connected");
});;}