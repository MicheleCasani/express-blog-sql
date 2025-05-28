// importo express
const express = require('express');
const app = express()
const port = 3000;


// rotta base
app.get("/", (req, res) => {
    console.log("server del mio blog")
    res.send("benvenuto nella mia pizzeria")
})

app.listen(port, () => {
    console.log("server in ascolto sulla porta" + port)
})