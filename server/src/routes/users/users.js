const express = require("express");
const db = require('../../config/db');
const authMiddleware = require('../../middleware/auth_middleware.js');

const usersRouter = express.Router();

usersRouter.use(authMiddleware);

usersRouter.get('/:username', (req, res) => {
    db.query(`SELECT * FROM users WHERE username = ?`, [req.params.username], (err, results) => {
        if (err) {
            res.status(500).send({msg: "Internal server error"});
            throw err;
        }
        if (results.length == 0)
            return res.sendStatus(404);
        res.status(200).send({user: results[0]});
    });
});

module.exports = usersRouter;