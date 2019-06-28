// bring in express
const express = require('express');

// bring in extra tools
const helmet = require('helmet');
const cors = require('cors');

// create server
const server = express();

// middleware 
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(logger);

// initial test to make sure server is running
server.get('/', (req, res) => {
    res.status(200).json({ api: 'up'})
})


// logging request methods
function logger(req, res, next){
    console.log(`${req.method} Request`)
    next();
}

module.exports = server;