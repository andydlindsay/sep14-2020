const fs = require('fs');

const fileData = fs.readFileSync('./index.html', { encoding: 'utf-8' });
console.log('sync file data:', fileData.length);

fs.readFile('./index.html', { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    console.log('is this us??', err);
    // throw err;
  } else {
    console.log('async data', data.length);
  }
});

// more stuff
