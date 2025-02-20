const client = require('./client.cjs');


const createFood = async (foodName, foodCost, foodDescription, foodIngredients) => {
  try {
    await client.query(`
      INSERT INTO foods (name, cost, description, ingredients)
      VALUES ('${foodName}', ${foodCost}, '${foodDescription}', '${foodIngredients}')
      
      `)
  } catch (err) {
    console.log(err);
  }
}

const getAllFoods = async () => {
  try {
    const { rows: retrievedFoods } = await client.query(`
SELECT * FROM foods;
    `);

    return retrievedFoods;
  } catch (err) {
    console.log(err);
  }
}

const getFoodById = async (foodId) => {
  try {
    const { rows } = await client.query(`
   SELECT * FROM foods WHERE id= ${foodId}
    `);
    const foodItem = rows[0];

    return foodItem;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createFood,
  getAllFoods,
  getFoodById
};