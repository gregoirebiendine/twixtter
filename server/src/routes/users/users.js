const express = require("express");
const db = require('../../config/db');
const { v4: uuidv4 } = require('uuid');
const authMiddleware = require('../../middleware/auth_middleware.js');
const {getTwixsByUsername, getFeed} = require('./users.functions.js');

const usersRouter = express.Router();

usersRouter.get('/profile/:username', (req, res) => {
    db.query(`SELECT * FROM users WHERE username = ?`, [req.params.username], async (err, userRes) => {
        if (err) {
            res.status(500).send({msg: "Internal server error"});
            throw err;
        }
        if (userRes.length == 0)
            return res.sendStatus(404);

        const userTwixs = await getTwixsByUsername(req.params.username);
        if (!userTwixs)
            return res.sendStatus(404);
        res.status(200).send({connectedUser: (req.user) ? req.user : null, user: userRes[0], twixs: userTwixs});
    });
});

usersRouter.get('/feed', authMiddleware, async (req, res) => {
    let followers = JSON.parse(req.user.followers);

    if (followers.length == 0)
        res.status(200).send({ connectedUser: req.user, feed: [] });
    else {
        const feedData = await getFeed(followers);
        if (!data)
            return res.sendStatus(500);
        res.status(200).send({ connectedUser: req.user, feed: feedData });
    }
});

usersRouter.get('/:username/twix', async (req, res) => {
    const data = await getTwixsByUsername(req.params.username);
    if (!data)
        return res.sendStatus(404);
    res.status(200).send(data);
});

usersRouter.post('/twix', authMiddleware, (req, res) => {
    const uuid = uuidv4();
    db.query(
        "INSERT INTO twixs (id, authorId, authorUsername, authorTwixname, authorPhoto, textContent, mediaContent, commentNumber, retwixNumber, likeNumber, postDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [uuid, req.user.id, req.user.username, req.user.twixname, req.user.profilePhoto, req.body.textContent, req.body.mediaContent, 0, 0, 0, req.body.postDate],
    (err) => {
        if (err) {
            res.status(500).send({msg: "Internal server error"});
            throw err;
        }
        res.sendStatus(200);
    });
});


module.exports = usersRouter;