const client = require('./client.js');


const createFood = async(foodName, foodCost, foodDescription, foodIngredients) => {
  // console.log('creating food');
  try{ 
    await client.query(`
      INSERT INTO food (name, cost, description, ingredients)
      VALUES (' ${foodName}, ${foodCost}, '${foodDescription}', '${foodIngredients}')
      
      `)
  } catch(err) {
    console.log(err);
  }
}

module.exports = { 
  createFood
};