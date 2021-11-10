const express = require("express")
const app = express()

//Importing routes
const authRoute = require("./routes/auth")

//Route middlewares
app.use("/api/user",authRoute)


app.listen(3000,()=> console.log("The server is up and running"))