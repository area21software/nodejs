const launches = new Map()

const launch1 = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  desination: "Kepler-442 b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
}

const launch2 = {
  flightNumber: 102,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  desination: "Kepler-442 b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
}

launches.set(launch1.flightNumber, launch1)
launches.set(launch2.flightNumber, launch2)

function getAllLaunches() {
  return Array.from(launches.values())
}

module.exports = {
  getAllLaunches,
}
