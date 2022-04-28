const mongoose = require('mongoose');

function connect() {
  mongoose.connect('mongodb://localhost:27017/database');

  mongoose.connection.once('open', () => {
    console.log('Base de datos conectado existósamente!');
  });

  mongoose.connection.on('error', () => {
    console.log('Algo funcionó mal!');
  });
}

module.exports = { connect }
