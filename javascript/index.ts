export {};

function* idMaker() {
  var index: number = 0;
  while (true) {
    yield index++;
  }
}

var gen = idMaker();

console.log(gen);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
