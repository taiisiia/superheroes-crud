const express = require("express");
const shRouter = require("./superheroes");

const router = express.Router();

router.use("/superheroes", shRouter);

module.exports = router;