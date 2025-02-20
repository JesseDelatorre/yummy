const client = require('./client.js');




const dropTables = async() => {
try{
  await client.query(`
    DROP TABLE IF EXISTS foods;
    `);
}catch(err){
  console.log(err);
}
}

const createTable = async() => {
  try{
  await client.query(` 
  CREATE TABLE foods (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL UNIQUE,
  cost INTEGER,
  description VARCHAR(100) UNIQUE,
  ingredients TEXT NOT NULL
  );
  `);
  }catch(err){
    console.log(err);
  }
};

const syncAndSeed = async() => {
  await client.connect();
console.log('connected to DB');

console.log('dropping tables');
await dropTables();
console.log('tables dropped');

console.log('creating table');
 await createTable();
console.log('table created');


  await client.end();
  console.log('D/C from DB');
}

syncAndSeed();