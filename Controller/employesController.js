const Employes = require("../Model/Employes");

exports.ajouter = async (req, res) => {
  try {
    const { _id, Nom_employe, Poste } = req.body;
    let newEmployes = new Employes({ _id, Nom_employe, Poste });
    let saveEmployes = await newEmployes.save();
    res.status(201).send(saveEmployes);
  } catch (error) {
    console.log(error);
  }
};
exports.afficher = async (req, res) => {
  try {
    let data = await Employes.find({});
    res.json(data);
  } catch (error) {
    res.status(500).send("An error occurred");
  }
};
exports.modifier = async (req, res) => {
  try {
    let updateEmployes = await Employes.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updateEmployes);
  } catch (error) {
    console.log(error);
  }
};
exports.supprimer = async (req, res) => {
  try {
    let deleteEmployes = await Employes.findByIdAndRemove(req.params.id);
    res.json(deleteEmployes);
  } catch (error) {
    console.log(error);
  }
};
exports.limit = async (req, res) => {
  const employes = await Employes.find().limit(req.query.limit);
  res.json(employes);
};
