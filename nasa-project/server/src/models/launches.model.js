const launches = new Map()

let latestFlightNumber = 100

const launch1 = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  target: "Kepler-442 b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
}

launches.set(launch1.flightNumber, launch1)

function existsLaunchWithlaunchFlightNumber(flightNumber) {
  return launches.has(flightNumber)
}

function getAllLaunches() {
  return Array.from(launches.values())
}

function addNewLaunch(launch) {
  latestFlightNumber++
  return launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      flightNumber: latestFlightNumber,
      customers: ["ZTM", "NASA"],
      success: true,
      upcoming: true,
    })
  )
}

function abortLaunch(launchFlightNumber) {
  const aborted = launches.get(launchFlightNumber)
  aborted.upcoming = false
  aborted.success = false
  return aborted
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
  abortLaunch,
  existsLaunchWithlaunchFlightNumber,
}
