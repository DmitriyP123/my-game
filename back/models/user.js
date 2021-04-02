const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  stata: { type: Number, default: 0 }
});

module.exports = mongoose.model('User', userSchema);
