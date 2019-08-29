function add(param1, param2) {
  return (param1 + param2)
}

function add2(...params) {
  return params.reduce((a, b) => a + b, 0)
};

function add3(...params) {
  let total = 0;

  params.forEach((param) => {
    total += param;
  });

  return total;

}


console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1,2,3,4,5));
console.log(add2(2,3));

console.log(add3(1, 2, 3, 4, 5));
console.log(add3(2, 3));