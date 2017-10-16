
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function (table) {
    table.increments();
    table.integer('display_order');
    table.string('project_name');
    table.text('description');
    table.string('image_url');
    table.json('tech_stack');
    table.string('github_url');
    table.string('deployed_url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};
