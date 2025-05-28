// index
const index = (req, res) => {
    res.send("elenco post")
};

// show
const show = (req, res) => {
    res.send(`post con id: ${req.params.id}`)
};

module.exports = {
    index,
    show
}