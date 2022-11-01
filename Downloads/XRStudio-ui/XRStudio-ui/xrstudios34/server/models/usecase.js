const mongoose = require("mongoose");

const useCaseSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },

  caseTitle: {
    type: String,
    required: true,
  },
  caseRequirements: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  uploadedFiles: [
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

module.exports = mongoose.model("useCase", useCaseSchema);
