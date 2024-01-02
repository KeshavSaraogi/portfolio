require("dotenv").config

const express = require("express")
const cors = require("cors")
const path = require("path")

const contactRoute = require("./router/contactRoute")

const app = express()

app.use(express.json())
app.use(cors())
app.use("")

const port = process.env.PORT || 4000
app.listen(port, console.log("SERVER LISTENING TO PORT 5000"))
