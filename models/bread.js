const mongoose = require("mongoose");

const breadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hasGluten: { type: Boolean },
  image: {
    type: String,
    default:
      "https://img.freepik.com/premium-vector/cute-funny-bread-toast-character_92289-2249.jpg",
  },
  baker: {
    type: mongoose.Types.ObjectId,
    ref: "Baker",
  },
});

breadSchema.methods.getBakedBy = function () {
  return `This ${this.name} was baked with ❤ by ${
    this.baker.name
  } who has been baking with us since ${this.baker.startDate.getFullYear()}.`;
};
module.exports = mongoose.model("Bread", breadSchema);
