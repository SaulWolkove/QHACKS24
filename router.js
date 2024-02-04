const express = require("express");
const createItemRoute = require('./apiRoutes/createItemRoute')
const readItemRoute = require("./apiRoutes/readItemRoute")
const deleteItemRoute = require("./apiRoutes/deleteItemRoute")
const createPostRoute = require("./apiRoutes/createPostRoute")
const readPostRoute = require("./apiRoutes/readPostRoute")
const deletePostRoute = require("./apiRoutes/deletePostRoute")
const updateItemRoute = require("./apiRoutes/updateItemRoute")
const createUserRoute = require("./apiRoutes/createAccountRoute")
const getAccountRoute = require("./apiRoutes/getAccountRoute")
const updateAccountRoute = require("./apiRoutes/updateAccountRoute")
const router = express.Router();
router.post("/addItem", createItemRoute);
router.get("/getItem",readItemRoute);
router.delete("/:id",deleteItemRoute);
router.post("/createPost",createPostRoute);
router.get("/readPost",readPostRoute);
router.delete("/post/:id",deletePostRoute);
router.put("/update/:id", updateItemRoute);
router.get("/getCart/:id", updateItemRoute);
router.post("/user", createUserRoute);
router.post("/user/post/:id", updateAccountRoute)
router.get("/user/:id", getAccountRoute)


module.exports = router