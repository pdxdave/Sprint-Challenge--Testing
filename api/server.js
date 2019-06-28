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

// POST
server.post('/games', async (req, res) => {
    const game = req.body
    // check if there is no title or genre. year can be blank
    if (!game.title || !game.genre) {
        // return 422
       return res.status(422).json({
           message: "Please fill in all the information"
       })
    } else {
        // if there is no error, try to post game with success return code
        try {
            const newGame = req.body;
            const item = await videogames.add(newGame)
            res.status(201).json(item)
        } catch (error) {
            res.status(500).json(error)
        }
    }
})


// logging request methods
function logger(req, res, next){
    console.log(`${req.method} Request`)
    next();
}

module.exports = server;