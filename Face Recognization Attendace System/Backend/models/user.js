const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  aadhaarNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  faceEncoding: { type: String }, // Store face encoding string
});

module.exports = mongoose.model("User", UserSchema);
