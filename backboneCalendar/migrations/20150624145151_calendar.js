'use strict';

exports.up = function(knex, Promise) {
	return knex.schema.createTable('months', function(table) {
		table.increments('month').primary();

	})  
};

exports.down = function(knex, Promise) {
  
};
