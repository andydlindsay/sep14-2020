console.log('before the setTimeout');

const delay = 10;

const timeout = setTimeout(() => {
  console.log('hello!');
  console.log(timeout);
}, delay);

for (let i = 0; i < 10000; i++) {
  const date = new Date();
  console.log(date);
}

// console.log(timeout);

console.log('after the setTimeout');
