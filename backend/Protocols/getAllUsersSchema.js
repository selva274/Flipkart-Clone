const mongoose = require("mongoose");
const AllUserSchema = new mongoose.Schema({});
const AllUsers = mongoose.model("Users", AllUserSchema);
module.exports = AllUsers;