module.exports = {
  async up(knex) {
    // You have full access to the Knex.js API with an already initialized connection to the database

    // Example: renaming a table
    // await knex.schema.renameTable('accessories', 'newName');

    // // Example: renaming a column
    // await knex.schema.table('someTable', table => {
    //   table.renameColumn('oldName', 'newName');
    // });

    // // Example: updating data
    // await knex.from('someTable').update({ columnName: 'newValue' }).where({ columnName: 'oldValue' });
  },
};