
const db = require('../data/dbConfig');
const request = require ('supertest');  // read that supertest and... 
const {insert} = require('./videogamesModel');
const server = require('../api/server'); // server have to be imported

describe('POST /', () => {

    beforeEach(async () => {
        await db('videogames')
        .truncate();
    })


    describe('insert new video game', () => {

        it('should insert a new video game', async () => {
            await insert({ title: "Minecraft", genre: "adventure", releaseYear: 2016 });
            await insert({ title: "Counter Strike", genre: "action", releaseYear: 2000 });

            const videogames = await db('videogames');
            expect(videogames).toHaveLength(2);
        }) // end of insert video game check




    })// end of describe insert video game

}) // end of describe video games