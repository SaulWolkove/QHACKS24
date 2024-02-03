const express = require("express");
const createItemRoute = require('./apiRoutes/createItemRoute')
const readItemRoute = require("./apiRoutes/readItemRoute")
const deleteItemRoute = require("./apiRoutes/deleteItemRoute")
const createPostRoute = require("./apiRoutes/createPostRoute")
const readPostRoute = require("./apiRoutes/readPostRoute")
const deletePostRoute = require("./apiRoutes/deletePostRoute")
const updateItemRoute = require("./apiRoutes/updateItemRoute")

const router = express.Router();
router.post("/addItem", createItemRoute);
router.get("/getItem",readItemRoute);
router.delete("/:id",deleteItemRoute);
router.post("/createPost",createPostRoute);
router.get("/readPost",readPostRoute);
router.delete("/post/:id",deletePostRoute);
router.put("/update/:id", updateItemRoute);


module.exports = router