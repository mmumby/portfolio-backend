'use strict';

const knex = require('knex');
const knexLogger = require('knex-logger');

let knexHandle;

//setup knex connection

const init = function(app, knexConfig) {
  knexHandle = knex(knexConfig);
  app.use(knexLogger(knexHandle));
  return knexHandle;
}

//get a reference to knex connection
const handle = function(){
  return knexHandle;
};

module.exports = { init, handle };