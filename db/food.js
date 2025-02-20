const client = require('./client.js');


const createFood = async(foodName, foodCost, foodDescription, foodIngredients) => {
  // console.log('creating food');
  try{ 
    await client.query(`
      INSERT INTO foods (name, cost, description, ingredients)
      VALUES ('${foodName}', ${foodCost}, '${foodDescription}', '${foodIngredients}')
      
      `)
  } catch(err) {
    console.log(err);
  }
}

const getAllFoods = async() => {
// console.log('getting all food');
try{
  const { rows: retrievedFoods }  = await client.query(`
SELECT * FROM foods;
    `);

    return retrievedFoods;
}catch(err) {
  console.log(err);
}
}

const getFoodById = async(foodId) => {
console.log('getting food item');
try{
  const { rows } = await client.query(`
   SELECT * FROM foods WHERE id= ${foodId}
    `);
    const foodItem = rows[0];
    console.log(rows);

    return foodItem;
}catch(err){
  console.log(err);
}
};

module.exports = { 
  createFood,
  getAllFoods,
  getFoodById
};