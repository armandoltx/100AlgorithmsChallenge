function addBorder(picture) {
  let newPicture = [];
  let sum = 0;
  let stars = '';

  picture.forEach(function (value) {
    sum += value.length;
    x = ("*" + value + "*");
    newPicture.push(x);
  });

  for (let i = 1; i < sum; i++) {
    stars = stars.concat('*');
  }

  newPicture.push(stars);
  newPicture.unshift(stars);
  return newPicture;
}

console.log(addBorder(["abc", "ded"]));

// picture = ["abc", "ded"]
// the output should be

// addBorder(picture) = ["*****",
//   "*abc*",
//   "*ded*",
//   "*****"]

//   ** Hints **
//   -   concat()
//   - unshift()
//   - push()