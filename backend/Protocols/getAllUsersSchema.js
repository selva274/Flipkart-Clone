const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    
    },
    username: {
      type: String,
      required: true,
      trim: true,    
    }
  });

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;