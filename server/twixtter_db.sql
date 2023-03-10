DROP DATABASE if exists twixtter_db;

CREATE DATABASE twixtter_db;

USE twixtter_db;

CREATE TABLE users (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    email VARCHAR(64) NOT NULL UNIQUE,
    username VARCHAR(64) NOT NULL UNIQUE,
    twixname VARCHAR(64) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL UNIQUE
);