const mongoose = require("mongoose");

const useCaseSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  useCaseId: {
    type: String,
    required: true,
  },
  filesList: [
    {
      fileName: String,
      fileType: Buffer,
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("userupload", useCaseSchema);
