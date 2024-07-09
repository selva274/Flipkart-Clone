var http = require('http');
const express=require('express');
var app = require('./routes/userRoutes')(); 
const mongoose = require('mongoose');
const Users=require('./Protocols/getAllUsersSchema')
const body_parser=require('body-parser');
app.use(express.json());
app.use(body_parser.urlencoded({extended:true}))
app.use(body_parser.json());
const db = require('./Database/db');
const userRoutes=require('./routes/userRoutes');

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};

http.createServer(app).listen(app.get('port'));
