import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: { type: String },
  password: { type: String },
  liked: [
    {
      videoId: String,
    },
  ],
  notifications: [{ title: String }],
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const hashedPassword = await bcrypt.hash(this.password, 10);
  this.password = hashedPassword;
  next();
});
UserSchema.methods.getJWToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
};

UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
export const User = mongoose.model("User", UserSchema);
