const user = {
  name: 'Alice',
  faveNumber: 7,
  foods: ['oatmeal']
};

// user.name = 'Bob';

// const userCopy = user; // objects are stored by reference
const userCopy = {
  ...user,
  name: 'Bob',

  foods: [
    ...user.foods,
    'bananas'
  ]
};

// userCopy.name = 'Bob';
// userCopy.foods.push('bananas');

console.log(user);
console.log(userCopy);
