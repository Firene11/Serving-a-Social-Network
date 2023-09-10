const connection = require('../config/connection');
const { Users, Thoughts } = require('../models');
const { getRandomUser, getRandomThought } = require('./data');

connection.on('error', (err) => err);