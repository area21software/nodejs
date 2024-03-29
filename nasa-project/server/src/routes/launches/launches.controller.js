const {
  getAllLaunches,
  addNewLaunch,
  abortLaunch,
  existsLaunchWithlaunchFlightNumber,
} = require("../../models/launches.model")

function httpGetLaunches(req, res) {
  return res.status(200).json(getAllLaunches())
}

function httpAddNewLaunch(req, res) {
  const newLaunch = req.body

  if (
    !newLaunch.mission ||
    !newLaunch.rocket ||
    !newLaunch.launchDate ||
    !newLaunch.target
  ) {
    return res.status(400).json({
      error: "Missing required launch properties",
    })
  }

  newLaunch.launchDate = new Date(newLaunch.launchDate)

  if (isNaN(newLaunch.launchDate)) {
    return res.status(400).json({
      error: "Invalid Date",
    })
  }

  addNewLaunch(newLaunch)
  return res.status(201).json(newLaunch)
}

function httpAbortLaunch(req, res) {
  const launchFlightNumber = +req.params.id
  if (!existsLaunchWithlaunchFlightNumber(launchFlightNumber)) {
    return res.status(404).json({ error: "Launch Not Found" })
  }

  const aborted = abortLaunch(launchFlightNumber)

  return res.status(200).json(aborted)
}

module.exports = {
  httpGetLaunches,
  httpAddNewLaunch,
  httpAbortLaunch,
}
