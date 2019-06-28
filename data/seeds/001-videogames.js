
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('videogames')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('videogames').insert([
        {title: "Doom", genre: 'First Person Shooter', releaseYear: 1993 },
        {title: "Duke Nukem 3D", genre: 'First Person Shooter', releaseYear: 1996},
        {title: "Quake", genre: 'First Person Shooter', releaseYear: 1996}
      ]);
    });
};
