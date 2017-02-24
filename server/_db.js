'use strict';

var Sequelize = require('sequelize');

var {dbURI} = require('../secrets');

var databaseURI = dbURI;

var db = new Sequelize(databaseURI, {
  define: {
    timestamps: false,
    underscored: true
  },
  logging: false
});

module.exports = db;
