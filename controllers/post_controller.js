// importo mysql 
const mysql = require('../data/db.js');
// importo connection
const connection = require('../data/db.js');


// index
const index = (req, res) => {

    // salvo in una variabile la query da utilizzare
    const sql = 'SELECT * FROM posts';

    // eseguo la query per mostrare i post
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json(results);
    })
};


// show
const show = (req, res) => {
    // recupero id
    const id = parseInt(req.params.id);

    // salvo in una variabile la query da utilizzare
    const postSql = 'SELECT * FROM posts WHERE id = ?';

    const tagsSql = `
    SELECT *
    FROM tags
    JOIN post_tag ON post_tag.tag_id = tags.id
    WHERE post_id = ?
    `;

    // eseguo la query per mostrare il singolo post
    connection.query(postSql, [id], (err, postResults) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        if (postResults.length === 0) return res.status(404).json({ error: 'Post non trovato' });

        // recupero il post
        const post = postResults[0];

        // eseguo la  query per i tags
        connection.query(tagsSql, [id], (err, tagsResults) => {
            if (err) return res.status(500).json({ error: 'Database error' });

            res.json(post);
        })
    })
};


// destroy
const destroy = (req, res) => {
    // recupero id dall'URL
    const id = parseInt(req.params.id);

    // salvo in una variabile la query da utilizzare
    const sql = 'DELETE FROM posts WHERE id = ?';

    // eseguo la query per eliminare il post
    connection.query(sql, [id], (err) => {
        if (err) return res.status(500).json({ error: 'Eliminazione del post non avvenuta' });
        res.sendStatus(204);
    })
};

module.exports = {
    index,
    show,
    destroy
}