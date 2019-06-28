
exports.up = function(knex, Promise) {
    return knex.schema.createTable('videogames', videogames => {
        videogames.increments() // ads pk, not null, auto increment

        videogames // new column
         .string('title', 128)
         .notNullable()

        videogames // new column
         .string('genre', 128)
         .notNullable()

        videogames // new column
          .integer('releaseYear', 4 )
    })
};

exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('videogames');
};
