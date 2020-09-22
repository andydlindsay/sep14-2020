let count = 0;

const interval = setInterval(() => {
  console.log('hello!', count);
  count += 1;

  if (count > 10) {
    clearInterval(interval);
  }
}, 500);

console.log(interval);
