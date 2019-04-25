exports.up = function(knex, Promise) {
  return knex.schema.createTable('tickets', table => {
      table.increments();
      table.string('title', 250).notNullable();
      table.string('description').notNullable();
      table.string('category').notNullable();
      table.boolean('resolved').notNullable().defaultTo(false);
      table.boolean('assigned').notNullable().defaultTo(false);
      table.integer('assigned_user').defaultTo(0);
      table.string('created_at').notNullable().defaultTo(knex.fn.now());
      table.integer('user_id').unsigned().references('id').inTable('users');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tickets')
};
