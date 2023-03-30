DROP DATABASE if exists twixtter_db;

CREATE DATABASE twixtter_db;

USE twixtter_db;

CREATE TABLE users (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    email VARCHAR(64) NOT NULL UNIQUE,
    username VARCHAR(64) NOT NULL UNIQUE,
    twixname VARCHAR(64) NOT NULL UNIQUE,
    password VARCHAR(128) NOT NULL UNIQUE,
    profileBio VARCHAR(192),
    profileLink VARCHAR(192),
    profileLocation VARCHAR(64),
    profilePhoto VARCHAR(64) NOT NULL DEFAULT '/default_profile_photo.jpg',
    profileHeader VARCHAR(64) DEFAULT NULL,
    followings JSON DEFAULT ('[]'),
    followers JSON DEFAULT ('[]')
);

CREATE TABLE twixs (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    authorId VARCHAR(255) NOT NULL,
    authorUsername VARCHAR(64) NOT NULL,
    authorTwixname VARCHAR(64) NOT NULL,
    authorPhoto VARCHAR(64) NOT NULL DEFAULT '/default_profile_photo.jpg',
    textContent VARCHAR(192) NOT NULL,
    mediaContent VARCHAR(192),
    commentNumber INT NOT NULL DEFAULT 0,
    retwixNumber INT NOT NULL DEFAULT 0,
    likeNumber INT NOT NULL DEFAULT 0,
    postDate DATETIME NOT NULL DEFAULT NOW(),
    FOREIGN KEY (authorId) REFERENCES users(id)
);