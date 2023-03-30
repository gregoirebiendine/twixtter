const express = require("express");
const db = require('../../config/db');
const authMiddleware = require('../../middleware/auth_middleware.js');

const usersRouter = express.Router();

usersRouter.get('/profile/:username', (req, res) => {
    db.query(`SELECT * FROM users WHERE username = ?`, [req.params.username], (err, userRes) => {
        if (err) {
            res.status(500).send({msg: "Internal server error"});
            throw err;
        }
        if (userRes.length == 0)
            return res.sendStatus(404);
        db.query(`SELECT * FROM twixs WHERE authorId = ?`, [userRes[0].id], (err, twixsRes) => {
            if (err) {
                res.status(500).send({msg: "Internal server error"});
                throw err;
            }
            res.status(200).send({connectedUser: (req.user) ? req.user : null, user: userRes[0], twixs: twixsRes});
        });
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
    // db.query(`SELECT * FROM twixs WHERE authorId = ?`, [req.user.id], (err, userRes) => {
    //     if (err) {
    //         res.status(500).send({msg: "Internal server error"});
    //         throw err;
    //     }
    //     if (userRes.length == 0)
    //         return res.sendStatus(404);
    // });
});

module.exports = usersRouter;