const friends = require("../model/friends.model")

function getFriends(req, res) {
  res.json(friends)
}

function getFriendById(req, res) {
  const friendId = +req.params.friendId
  const friend = friends[friendId]

  if (friend) {
    res.status(200).json(friend)
  } else {
    res.status(404).json({
      error: "Friend does not exist",
    })
  }
}

function postFriends(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing name in request body",
    })
  }
  const newFriend = {
    id: friends.length,
    name: req.body.name,
  }
  friends.push(newFriend)
  res.status(201).json(newFriend)
}

module.exports = {
  getFriends,
  getFriendById,
  postFriends,
}
