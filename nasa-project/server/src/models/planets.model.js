const { parse } = require("csv-parse")
const path = require("path")
const fs = require("fs")

const habitalPlanets = []

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  )
}

fs.createReadStream(path.join(__dirname, "..", "data", "kepler_data.csv"))
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data) => {
    if (isHabitablePlanet(data)) {
      habitalPlanets.push(data)
    }
  })
  .on("error", (err) => {
    console.log(err)
  })
  .on("end", () => {
    console.log(`Habitable Planets: ${habitalPlanets.length}`)
    console.log(habitalPlanets.map((planet) => planet["kepler_name"]))
    console.log("-----End of stream-----")
  })

module.exports = habitalPlanets
