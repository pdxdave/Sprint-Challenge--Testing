
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


        it('should output 422 error due to insufficient content', async () => {
            let game = { title: 'Star Trek Battle Galore'}

            const res = await request(server)  // I think supertest is working its magic on server
                              .post('/games')  // identifying this endpoint
                              .send(game) // sending game title. not enough info though
            expect(res.statusCode) // getting back 422 status code from server
            .toEqual(422) // should be output
        }) // end of 422 check


        it('should output a 201 success code', async () => {
            // insert game info
             let game = { title: "Diablo II", genre: "action RPG", releaseYear: 2000 }
             const res = await request(server)
                               .post('/games')
                               .send(game)
              expect(res.statusCode)
              .toBe(201)
        }) // end of 201 check
        


    })// end of describe insert video game

}) // end of describe POST