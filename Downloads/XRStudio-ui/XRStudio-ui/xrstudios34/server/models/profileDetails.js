const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileDetails = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // ref: "user",
  },
  designation: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    required: true,
  },
  interests: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("generalInformation", profileDetails);
