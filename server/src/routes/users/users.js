const express = require("express");
const db = require('../../config/db');
const { v4: uuidv4 } = require('uuid');
const authMiddleware = require('../../middleware/auth_middleware.js');
const {getTwixsByUsername} = require('./users.functions.js');

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
        // db.query(`SELECT * FROM twixs WHERE authorId = ?`, [userRes[0].id], (err, twixsRes) => {
        //     if (err) {
        //         res.status(500).send({msg: "Internal server error"});
        //         throw err;
        //     }
        //     res.status(200).send({connectedUser: (req.user) ? req.user : null, user: userRes[0], twixs: twixsRes});
        // });
    });
});

usersRouter.get('/feed', authMiddleware, (req, res) => {
    res.status(200).send({
        connectedUser: (req.user) ? req.user : null,
        feed: [
            {
                id: '1',
                authorId: req.user.id,
                authorUsername: req.user.username,
                authorTwixname: 'melio',
                authorPhoto: '/default_profile_photo.jpg',
                textContent: "Ceci est un Twix test.",
                mediaContent: null,
                commentNumber: 0,
                retwixNumber: 0,
                likeNumber: 0,
                postDate: new Date()
            }
        ]    
    });
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