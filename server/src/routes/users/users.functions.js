const db = require('../../config/db');

function getTwixsByUsername(username) {
    return new Promise(resolve => {
        db.query(`SELECT * FROM twixs WHERE authorUsername = ? ORDER BY postDate DESC`, [username], (err, queryRes) => {
            if (err) {
                reject({msg: "Internal server error"});
            }
            resolve(queryRes);
        });
    });
}

function getFeed(usernameArray) {
    return new Promise(resolve => {
        db.query(`SELECT * FROM twixs WHERE authorUsername in (?) ORDER BY postDate DESC`, [usernameArray], (err, queryRes) => {
            if (err) {
                reject({msg: "Internal server error"});
            }
            resolve(queryRes);
        });
    });
}

module.exports = {
    getTwixsByUsername: getTwixsByUsername,
    getFeed: getFeed
}