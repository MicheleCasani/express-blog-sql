// importo express
const express = require('express');
const app = express()
const port = 3000;

// importo il router
const postRouter = require("./routers/post_router")

// middleware per gli asset statici
app.use(express.static('public'));

// middleware per il parsing delle richiesta in formato json
app.use(express.json());

// rotta base
app.get("/", (req, res) => {
    console.log("server del mio blog")
    res.send("benvenuto nella mia pizzeria")
})

// utilizzo le rotte definite nel router
app.use("/posts", postRouter)

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`)
})