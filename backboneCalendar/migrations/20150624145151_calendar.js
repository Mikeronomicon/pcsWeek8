'use strict';

exports.up = function(knex, Promise) {
	return knex.schema.createTable('months', function(table) {
		table.increments('days').primary();
		table.string('title');
		table.string('event');
	})  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('months');
};
