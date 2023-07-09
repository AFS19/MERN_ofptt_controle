const express = require("express");
const route = express.Router();
const EmployesController = require("../Controller/employesController");

route.post("/ajouter", EmployesController.ajouter);
route.get("/", EmployesController.afficher);
route.put("/modifier/:id", EmployesController.modifier);
route.delete("/supprimer/:id", EmployesController.supprimer);
route.get("/limit", EmployesController.limit);

module.exports = route;
