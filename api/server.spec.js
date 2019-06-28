// bring in supertest
const request = require('supertest');

// connect to server
const server = require('./server');

describe('server.js', () => {


    describe('GET /', () => {

        it('should return with 200 OK', async () => {
            const res = await request(server)
            .get('/')

            expect(res.status)
            .toBe(200)
        }) // end of 200 OK check

        
        it('should return (api: up)', async () => {
            const res = await request(server)
            .get('/')

            expect(res.body)
            .toEqual({'api': 'up'})
        }) // end of API check


        


    }) // end of describe GET
}) // end of describe server