const mongoose = require("mongoose");

const breadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hasGluten: { type: Boolean },
  image: {
    type: String,
    default:
      "https://img.freepik.com/premium-vector/cute-funny-bread-toast-character_92289-2249.jpg",
  },
});

module.exports = mongoose.model("Bread", breadSchema);
