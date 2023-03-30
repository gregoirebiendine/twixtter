const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const db = require('../config/db');

passport.serializeUser((user, cb) => {
    process.nextTick(() => {
        cb(null, user);
    });
});

passport.deserializeUser((user, cb) => {
    process.nextTick(() => {
        db.query('SELECT * FROM users WHERE id = ?', [user.id], (err, results) => {
            cb(err, (results.length > 0) ? results[0] : null);
        });
    });
});

passport.use(new LocalStrategy((username, password, cb) => {
    db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
        if (err)
            return cb(err);
        if (results.length == 0)
            return cb(null, false, {message: 'Incorrect username.'});
        bcrypt.compare(password, results[0].password, (compareErr, isValid) => {
            if (compareErr)
                return cb(compareErr);
            if (!isValid)
                return cb(null, false, {message: 'Incorrect password.'});
            return cb(null, {id: results[0].id});
        });
    });
}));