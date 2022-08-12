const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, unique: true, required: true },
  year: { type: String, required: true },
  description: { type: String, unique: false, required: false },
  img: { type: String, required: true },
  actors: [{ type: Schema.Types.ObjectId, ref: "actors", required: true }],
  music: [{ type: Schema.Types.ObjectId, ref: "music", required: true }],
});

module.exports = mongoose.model("films", schema);
