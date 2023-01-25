const express = require("express")
const friendsController = require("../controller/friends.controller")

const friendsRouter = express.Router()

friendsRouter.get("/", friendsController.getFriends)
friendsRouter.get("/:friendId", friendsController.getFriendById)
friendsRouter.post("/", friendsController.postFriends)

module.exports = friendsRouter
