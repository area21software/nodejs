const request = require("supertest")
const app = require("../../app")

describe("Test GET /launches", () => {
  test("Should respond with 200 success", async () => {
    const response = await request(app)
      .get("/launches")
      .expect("Content-Type", /json/)
      .expect(200)
  })

  describe("Test POST /launches", () => {
    const completeLaunchData = {
      mission: "First Mission",
      rocket: "The biggest Rocket",
      target: "Exoplanet Leah",
      launchDate: "January 30, 2040",
    }

    const launchDataWithoutDate = {
      mission: "First Mission",
      rocket: "The biggest Rocket",
      target: "Exoplanet Leah",
    }

    const launchDataInvalidDate = {
      mission: "First Mission",
      rocket: "The biggest Rocket",
      target: "Exoplanet Leah",
      launchDate: "Nope",
    }

    test("Should respond with 201 created", async () => {
      const res = await request(app)
        .post("/launches")
        .send(completeLaunchData)
        .expect("Content-Type", /json/)
        .expect(201)

      const requestDate = new Date(completeLaunchData.launchDate).valueOf()
      const resDate = new Date(res.body.launchDate).valueOf()

      expect(requestDate).toBe(resDate)

      expect(res.body).toMatchObject(launchDataWithoutDate)
    })

    test("Should catch missing required properties", async () => {
      const res = await request(app)
        .post("/launches")
        .send(launchDataInvalidDate)
        .expect("Content-Type", /json/)
        .expect(400)

      expect(res.body).toStrictEqual({
        error: "Invalid Date",
      })
    })

    test("Should catch invalid dates", () => {})
  })
})
