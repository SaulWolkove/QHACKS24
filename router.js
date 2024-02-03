const express = require("express");
const createItemRoute = require('./apiRoutes/createItemRoute')
const readItemRoute = require("./apiRoutes/readItemRoute")
const deleteItemRoute = require("./apiRoutes/deleteItemRoute")

const router = express.Router();
router.post("/addItem", createItemRoute);
router.get("/getItem",readItemRoute);
router.delete("/:id",deleteItemRoute);

module.exports = router