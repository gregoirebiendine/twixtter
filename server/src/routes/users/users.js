const express = require("express");
const db = require('../../config/db');
const authMiddleware = require('../../middleware/auth_middleware.js');

const usersRouter = express.Router();

usersRouter.use(authMiddleware);

usersRouter.get('/:username', (req, res) => {
    db.query(`SELECT * FROM users WHERE username = ?`, [req.params.username], (err, userRes) => {
        if (err) {
            res.status(500).send({msg: "Internal server error"});
            throw err;
        }
        if (userRes.length == 0)
            return res.sendStatus(404);
        // res.status(200).send({user: userRes[0]});
        db.query(`SELECT * FROM twixs WHERE authorId = ?`, [userRes[0].id], (err, twixsRes) => {
            if (err) {
                res.status(500).send({msg: "Internal server error"});
                throw err;
            }
            res.status(200).send({user: userRes[0], twixs: twixsRes});
        });
    });
});

module.exports = usersRouter;