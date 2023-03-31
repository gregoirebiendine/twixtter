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

module.exports = {
    getTwixsByUsername: getTwixsByUsername
}