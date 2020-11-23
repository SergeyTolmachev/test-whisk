const _ = require('underscore');

const x = [1, 3, 5, 7];
const y = [1, 2, 3, 4];

const filtered = (a, b) => a.filter(aitem => b.includes(aitem));

const now = new Date();
console.log(filtered(x, y));
console.log(new Date() - now, 'ms');

const libraried = (a, b) => _.intersection(a, b);

const now2 = new Date();
console.log(libraried(x, y));
console.log(new Date() - now2, 'ms');

const removed = (a, b) => {
  const c = [...b];
  return a.filter(aitem => {
    const index = c.findIndex(citem => citem === aitem);
    if (index >= 0) {
      c.splice(index, 1);
    }

    return index >= 0;
  });
}


const now3 = new Date();
console.log(removed(x, y));
console.log(new Date() - now3, 'ms');

const mapped = (a, b) => {
  const keys = {};

  a.forEach(item => keys[item] = item);
  return b.filter(item => keys[item]);
}


const now4 = new Date();
console.log(mapped(x, y));
console.log(new Date() - now4, 'ms');




