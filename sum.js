console.log(sum(1)(2)()); // 3
console.log(sum(1)(2)(3)()); // 6
console.log(sum()); // 0

const fn = sum(1);
console.log(sum(2)()); // 2
console.log(fn(2)()); // 3

function sum(x){
  if (!x) {
    return this.y;
  }
  this.y = this.y || 0;

  return sum.bind({ y: this.y + x });
}
