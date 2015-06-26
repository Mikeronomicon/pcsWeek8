'use strict';

exports.up = function(knex, Promise) {
	return knex.schema.createTable('events', function(table) {
		table.increments('id').primary();
		table.date('date');
		table.string('title');
	})  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('events');
};
