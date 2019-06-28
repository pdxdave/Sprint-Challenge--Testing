const db = require('../data/dbConfig.js')

module.exports = {
    findAll,
    // findById,
    // remove,
    insert
    // update
}

function findAll(){
    return db('videogames')
}

function findById(id) {
    return db('videogames')
    .where({id})
    .first()
}

function remove(id) {
   return db('videogames')
   .where({id})
   .del();
}

function insert(body){
    return db('videogames')
    .insert(body, 'id')
    .then(([id]) => {
       return findById(id)
    })
}

function update (body, id) {
    return db('videogames')
    .where({id})
    .update(body);
}



