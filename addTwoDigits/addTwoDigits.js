function addTwoDigits(num) {
  num = num.toString();
  num = num.split('');
  var total = 0;

  num.forEach(function (n) {
    n = parseInt(n)
    total += n;
  });

  return total;
}

console.log(addTwoDigits(29));