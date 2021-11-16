const express = require("express");
const shRouter = express.Router();
const shController = require("../controllers/superheroes");
const validateHero = require("../middlewares/validateHero")

shRouter
.route("/")
.get(shController.getAllSupHeroes)
.post(validateHero, shController.createSupHero);

shRouter
.route("/:id")
.get(shController.getSupHeroById)
.patch(shController.updateSupHero)
.delete(shController.deleteSupHero);

module.exports = shRouter;