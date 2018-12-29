// config/database.js
const mongoose = require('mongoose');

// Use native promises
mongoose.Promise = global.Promise;

// Connect to MongoDB
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost/tresEnLinea';
mongoose.set('debug', true);
mongoose.connect(MONGODB_URL, { useMongoClient: true });

// Monitor DB connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error de conexion:'));
db.once('open', () => {
  console.log('Conectado exitosamente a MongoDB!');
});

module.exports = mongoose;