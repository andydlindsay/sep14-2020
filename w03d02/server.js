const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 34567;

const cheeseDb = {
  '1': {
    name: 'brie',
    fatPercentage: 50,
    age: 2,
    price: 19.99
  },
  '2': {
    name: 'american burger cheese',
    fatPercentage: 33,
    age: 5,
    price: 0.99
  },
};

let id = 2;
const getNextId = () => {
  id++;
  return id;
};

app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/', (req, res) => {
//   res.send('hello');
// });

// Browse GET /cheeses
app.get('/cheeses', (req, res) => {
  const templateVars = {
    cheeses: cheeseDb
  };
  console.log(templateVars);

  res.render('cheeses', templateVars);
});

// New cheese form
app.get('/cheeses/new', (req, res) => {
  res.render('new-cheese');
});

// Read GET /cheeses/:id
app.get('/cheeses/:id', (req, res) => {
  const cheeseId = req.params.id;
  const cheese = cheeseDb[cheeseId];

  if (!cheese) {
    res.status(404).send('cannot find cheese with that id');
    return;
  }

  const templateVars = { cheese, cheeseId };

  res.render('cheese', templateVars);
});

// Add POST /cheeses
app.post('/cheeses', (req, res) => {
  // age, fat-percentage, name, price
  const name = req.body.name;
  const age = req.body.age;
  const price = req.body.price;
  const fatPercentage = req.body['fat-percentage'];

  const newCheese = {
    name,
    age,
    price,
    fatPercentage
  };

  const newCheeseId = getNextId();

  cheeseDb[newCheeseId] = newCheese;

  res.redirect('/cheeses');
});

// Edit POST /cheeses/:id
app.post('/cheeses/:id', (req, res) => {
  const name = req.body.name;
  const cheeseId = req.params.id;

  cheeseDb[cheeseId].name = name;

  res.redirect(`/cheeses/${cheeseId}`);
});

// Delete POST /cheeses/:id/delete
app.post('/cheeses/:id/delete', (req, res) => {
  const cheeseId = req.params.id;
  delete cheeseDb[cheeseId];

  res.redirect('/cheeses');
});

// catchall
app.get('*', (req, res) => {
  res.status(404).send('page not found');
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
