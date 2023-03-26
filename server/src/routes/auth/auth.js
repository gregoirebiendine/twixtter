const express = require("express");
const bcrypt = require('bcrypt');
const passport = require('passport');
const db = require('../../config/db');
const { v4: uuidv4 } = require('uuid');
require('../../strategies/local_strategy');

const authRouter = express.Router();

authRouter.post('/login', passport.authenticate('local', {session: true}), (req, res) => {
    res.sendStatus(200);
});

authRouter.post('/signup', (req, res) => {
    if (!req.body.email || !req.body.password || !req.body.username)
        return res.status(400).send({msg: `One or more fields are missing in request body.`});

    db.query(`SELECT * FROM users WHERE email = ?`, [req.body.email], (err, results) => {
        if (err) {
            res.status(500).send({msg: "Internal server error"});
            throw err;
        }
        if (results.length != 0)
            return res.status(409).send({msg: "An account with this email already exist."});

        bcrypt.hash(req.body.password, 10).then(hash => {
            const uuid = uuidv4();
            db.query(`INSERT INTO users (id, email, username, twixname, password) VALUES (?, ?, ?, ?, ?)`, [uuid, req.body.email, req.body.username, req.body.username, hash], (err) => {
                if (err) {
                    res.status(500).send({msg: "Internal server error"});
                    throw err;
                }
                res.sendStatus(200);
            });
        });
    });
});

authRouter.post('/islogin', (req, res) => {
    if (req.isAuthenticated())
        res.status(200).send({user: req.user});
    else
        res.status(401).send({user: null});
});

authRouter.post('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            res.status(500).send({msg: "Internal server error"});
            throw err;
        }
        res.sendStatus(200);
    });
});

module.exports = authRouter;