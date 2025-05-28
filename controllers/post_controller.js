// importo mysql 
const mysql = require('../data/db.js');
// importo connection
const connection = require('../data/db.js');




// index
const index = (req, res) => {

    // salvare in una variabile la query da utilizzare
    const sql = 'SELECT * FROM posts';

    // eseguire la query per mostrare i post
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json(results);
    })
};

// show
const show = (req, res) => {
    res.send(`post con id: ${req.params.id}`)
};

module.exports = {
    index,
    show
}