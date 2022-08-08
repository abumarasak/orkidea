const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    password: String,
    isAdmin: Boolean,
    isActive: Boolean,
    image: String,
    phoneNumber: {
      verified: Boolean,
      number: String,
    },
    language: String,
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
