const express = require("express")
const path = require("path")
const friendsRouter = require("./routes/friends.router")
const messagesRouter = require("./routes/messages.router")

const app = express()
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "views"))

const PORT = 3000

app.use("/site", express.static(path.join(__dirname, "public")))
app.use(express.json())

app.get("/", (req, res) => {
  res.render("index", {
    title: "Go Spidey Go!",
  })
})

app.use("/friends", friendsRouter)
app.use("/messages", messagesRouter)

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})
