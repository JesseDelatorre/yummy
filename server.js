const { getAllFoods, getFoodById } = require('./db/food.js');
const client = require('./db/client.js');
client.connect();


const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.send('Welcome');
});

app.get('/api/v1/foods', async (req, res, next) => {
  const allFoods = await getAllFoods();
  // console.log('getting food');
  res.send(allFoods);
});

app.get('/api/v1/foods/:id', async (req, res, next) => {
  // console.log(req.params);
  // console.log('ID', id)
  const { id } = req.params;
  const foundFood = await getFoodById(id);
  // console.log('found food', foundFood);
  if (!foundFood) {
    next({ status: 400, message: ' Food Not Found' })
  }

  res.send(foundFood);
});


app.use((req, res, next) => {
  res.status(404).send('Page Not Found');
})

app.use((err, req, res, next) => {
  res.status(500).send(err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on PORT  ${PORT}`)
});