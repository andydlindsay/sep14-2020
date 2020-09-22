const higherOrderFunction = (callback) => {
  const data = {
    username: 'Alice'
  };

  console.log('before the timeout');

  setTimeout(() => {
    data.username = 'Bob';
    callback(data);
    // return data;
  }, 2000);

  console.log('after the timeout');
};

console.log('before the main call');

const returnValue = higherOrderFunction((whatever) => {
  console.log('the callback has been called!!!');
  console.log('whatever', whatever);
});
console.log('returnValue', returnValue);
console.log('after the main call');
