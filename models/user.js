const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wineListSchema = new Schema({
  name: String,
  varietal: String,
  year: Number,
  wineId: String,
  wineImage: String
}, {
  timestamps: true
})

const userSchema = new Schema(
  {
    name: String,
    alias: String,
    email: String,
    avatar: String,
    googleId: String,
    bio: String,
    friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
    favoriteWines: [{ type: Schema.Types.ObjectId, ref: "Wine" }],
    wineList: [wineListSchema]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
