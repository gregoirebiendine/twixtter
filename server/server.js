const express = require("express");
const session = require('express-session');
const passport = require("passport");
const cors = require("cors");
require('dotenv').config({path: `../.env`});

const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:8081",
    optionsSuccessStatus: 200,
    credentials: true
}));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {secure: false}
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', require('./src/routes/auth/auth.js'));
app.use('/api/users', require('./src/routes/users/users.js'));
app.use('/api/twixs', require('./src/routes/twixs/twixs.js'));

app.listen(8080, () => {
    console.log(`Twixtter server launched on http://localhost:8080/`);
});