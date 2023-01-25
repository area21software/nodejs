const path = require("path")

function getMessages(req, res) {
  res.sendFile(
    path.join(__dirname, "..", "public", "images", "chibi-spider.webp")
  )
}

module.exports = {
  getMessages,
}
