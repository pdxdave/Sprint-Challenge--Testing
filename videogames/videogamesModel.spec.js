// bring in express
const express = require('express');



// create server
const server = express();

// middleware body parser
server.use(express.json());

// initial test to make sure server is running
server.get('/', (req, res) => {
    res.status(200).json({ api: 'up'})
})
