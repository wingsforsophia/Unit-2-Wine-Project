const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    alias: String,
    email: String,
    avatar: String,
    googleId: String,
    friends: [{type: Schema.Types.ObjectId, ref: "User"}],
    favoriteWines: [{ type: Schema.Types.ObjectId, ref: "Wine" }],
    winesTried: [{ type: Schema.Types.ObjectId, ref: "Wine" }]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
