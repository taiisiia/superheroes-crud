const express = require("express");
const shRouter = express.Router();

shRouter
.route("/")
.get(shController.getAllSupHeroes)
.post(shController.createSupHero);

shRouter
.route("/:id")
.get(shController.getSupHeroById)
.patch(shController.updateSupHero)
.delete(shController.deleteSupHero);

module.exports = shRouter;