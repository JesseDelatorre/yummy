const { getAllFoods, getFoodById } = require('./db/food.cjs');
const client = require('./db/client.cjs');
client.connect();


const express = require('express');

const app = express();

app.use(express.static('dist'));

// app.get('/', (req, res, next) => {
//   res.sendFile(`${__dirname}./dist/index.html`);
// });

app.get('/api/v1/foods', async (req, res, next) => {
  const allFoods = await getAllFoods();
  res.send(allFoods);
});

app.get('/api/v1/foods/:id', async (req, res, next) => {
  const { id } = req.params;
  const foundFood = await getFoodById(id);
  if (!foundFood) {
    next({ status: 400, message: ' Food Not Found' })
  }

  res.send(foundFood);
});


app.use((req, res, next) => {
  res.status(404).send('Page Not Found');
})

app.use((err, req, res, next) => {
  res.status(err.status).send(err.message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on PORT  ${PORT}`)
});