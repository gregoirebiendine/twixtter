const express = require("express");
const db = require('../../config/db');

const twixsRouter = express.Router();

twixsRouter.get('/id/:id', (req, res) => {
    db.query(`SELECT * FROM twixs WHERE id = ?`, [req.params.id], (err, queryRes) => {
        if (err) {
            res.status(500).send({msg: "Internal server error"});
            throw err;
        }
        return res.status(200).send({twixs: (queryRes.length > 0) ? queryRes[0] : null});
    });
});

module.exports = twixsRouter;