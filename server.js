const express = require("express")
const app = new express()

/**
 * 1.a. handle GET on /score route
 * @return randomly generated score 0-100
 */
app.get("/score", (req, res) => {
    const score = Math.floor(Math.random() * 101)
    res.json({score})
})

app.post("/addScore",(req,res) => {
    const {score} = req.body
    
})

app.listen(8080, () => {
    console.log("server started")
})