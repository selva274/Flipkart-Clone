const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const AllUsers = require('./Protocols/getAllUsersSchema')
const body_parser = require('body-parser');
const path = require('path');
app.use(express.json());
require('dotenv').config()
app.use(body_parser.urlencoded({ extended: true }))
app.use(body_parser.json());
app.use(cors());
require('./Database/db');

const PORT = process.env.PORT || 3001;

app.get('/users', (req, res) => {
  AllUsers.find({}).then((data) => res.send(data))
})

app.get('/users/:name', (req, res) => {
  const name = req.params.name;
  AllUsers.findOne({ username: name }).then((data) => res.send(data))
})



 if(process.env.NODE_ENV==='development'){
  app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')))
 }


app.listen(PORT, () => {
  console.log("Server Connected..." + PORT + process.env.NODE_ENV);
})
