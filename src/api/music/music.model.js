const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, unique: true, required: true },
  author: { type: String, unique: false, required: true },
  year: { type: String, required: true },
  film: { type: String, required: true },
});

module.exports = mongoose.model("music", schema);
