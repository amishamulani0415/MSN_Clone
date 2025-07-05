const mongoose = require("mongoose");

const sampleSchema = new mongoose.Schema(
  {
    newsTitle: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const SampleModel = mongoose.model("Sample", sampleSchema);

module.exports = SampleModel;
