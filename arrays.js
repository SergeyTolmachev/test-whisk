const _ = require('underscore');

const x = [1, 3, 5, 7];
const y = [1, 2, 3, 4];

const easiest = (a, b) => a.filter(aitem => b.includes(aitem));

const now = new Date();
console.log(easiest(x, y));
console.log(new Date() - now, 'ms');

const middle = (a, b) => _.intersection(a, b);

const now2 = new Date();
console.log(middle(x, y));
console.log(new Date() - now2, 'ms');

const hardest = (a, b) =>
  a.filter(aitem => {
    const index = b.findIndex(bitem => bitem === aitem);
    if (index >= 0) {
      b.splice(index, 1);
    }

    return index >= 0;
  });

const now3 = new Date();
console.log(hardest(x, y));
console.log(new Date() - now3, 'ms');
