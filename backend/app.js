const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

app.use(express.urlencoded(
    {extended:true}
))
app.use(express.json())

// DB Connection
const conn = require("./db/conn")
conn()

// Routes
const routes = require("./routes/index")

app.use("/api", routes)


app.listen(3000, function (){
    console.log("Servidor Online")
    console.log("Porta 3000")
})
