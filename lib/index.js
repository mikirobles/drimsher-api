const express = require("express")
const bodyParser = require("body-parser")
const api = require("./api")
const app = express()
const { DEFAULT_PORT } = require('./config')
const PORT = process.env.PORT || DEFAULT_PORT

// MIDDLEWARE
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// ROUTES
app.use("/api", api)

// ENDPOINTS
app.get("*", (req,res) => res.status(404))

// SERVER
app.listen(PORT, () => console.log("[INFO] Listening on *:" + PORT))