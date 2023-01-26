const { getAllLaunches } = require("../../models/launches.model")

function httpGetLaunches(req, res) {
  return res.status(200).json(getAllLaunches())
}

module.exports = {
  httpGetLaunches,
}
