// bring in express
const express = require('express');

// bring in model
const VideoGames = require('../videogames/videogamesModel.js');

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

// printout games to screen
server.get('/games', async (req, res) => {
    const games = await VideoGames.findAll();
    res.status(200).json(games)
});



// logging request methods
function logger(req, res, next){
    console.log(`${req.method} Request`)
    next();
}

module.exports = server;