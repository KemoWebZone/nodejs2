const { hash } = require("bcrypt");
const mongoose = require("mongoose");
const sc = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
module.exports = mongoose.model("User", sc);
