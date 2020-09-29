const { localsName } = require('ejs');
const express = require('express');
const morgan = require('morgan');

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

app.set('view engine', 'ejs');

app.use(morgan('dev'));

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

// Read GET /cheeses/:id
app.get('/cheeses/:id', (req, res) => {
  const cheeseId = req.params.id;
  const cheese = cheeseDb[cheeseId];

  if (!cheese) {
    res.status(404).send('cannot find cheese with that id');
    return;
  }

  const templateVars = { cheese };

  res.render('cheese', templateVars);
});








app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
