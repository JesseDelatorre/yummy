const { Client } = require('pg');
const client = new Client('postgres://localhost:5432/yummy');

// client.connect();
module.exports = client; 