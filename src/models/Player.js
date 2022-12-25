const { Schema, model } = require("mongoose");

const playerSchema = new Schema(
  {
    name: { type: String, required: true },
    team: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Player", playerSchema);
