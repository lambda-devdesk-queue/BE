exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
      table.increments();
      table.string('firstName').notNullable();
      table.string('lastName').notNullable();
      table.string('username', 100).notNullable().unique();
      table.string('password').notNullable();
      table.string('email').notNullable().unique();
      table.boolean('isAdmin').notNullable().defaultTo(false);

      //table.string('role').notNullable();
      table.string('cohort');
      table.string('created_at').notNullable().defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
