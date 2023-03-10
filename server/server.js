const express = require("express");
const session = require('express-session');
const passport = require("passport");
const cors = require("cors");
require('dotenv').config({path: `../.env`});

const app = express();

app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {secure: false}
}));

app.use(cors({
    origin: "http://localhost:8081",
    optionsSuccessStatus: 200,
    credentials: true
}));

app.use(passport.initialize());
app.use(passport.session());

const authRouter = require('./src/routes/auth/auth.js');

app.use('/api/auth', authRouter);

app.listen(8080, () => {
    console.log(`Twixtter server launched on http://localhost:8080/`);
});