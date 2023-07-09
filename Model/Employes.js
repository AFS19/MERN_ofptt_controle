const mongoose = require("mongoose");
const employesSchema = mongoose.Schema(
  {
    _id: { type: Number, required: true },
    Nom_employe: { type: String, required: true },
    Poste: { type: String, required: true },
  },
  { timestamps: true }
);
const employes = mongoose.model("employes", employesSchema);
module.exports = employes;
