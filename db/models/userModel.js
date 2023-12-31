const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    password: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
    token: { type: String, default:'' },
  },
  {
    versionKey: false,
  }
);

const User = model("user", userSchema);
module.exports = User;
