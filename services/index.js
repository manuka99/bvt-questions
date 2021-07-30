// const { readFile } = require("../Common/util");
const UserDau = require("../dau/UserDau");

exports.foo = (n) => {
  if (n == 0) return 0;
  else if (n == 1) return 1;
  else if (n > 1) return this.foo(n - 1) + this.foo(n - 2);
};

exports.saveDataInFile = async (file) => {
  return new Promise((resolve, reject) => {
    const filedata = file.data.toString("utf8");
    const jsonData = JSON.parse(filedata);
    UserDau.SaveData(jsonData)
      .then((data) => resolve("Data was saved!"))
      .catch((err) => reject(`Error saving data: ${err.message}`));
  });
};

exports.reverseWithoutSpecial = (word) => {
  var reverseString = new Array();
  var specialCharPositions = [];
  for (let index = 0; index < word.length; index++) {
    const letter = word[index];
    if (letter.match(/^[^a-zA-Z0-9]+$/)) {
      // special
      specialCharPositions.push(index);
    } else {
      let stringPosition =
        word.length - index - 1 + specialCharPositions.length;
      reverseString[stringPosition] = letter;
    }
  }
  reverseString = reverseString.filter((n) => n);
  // add special characters
  for (let index = 0; index < specialCharPositions.length; index++) {
    const postition = specialCharPositions[index];
    reverseString.splice(postition, 0, word[postition]);
  }

  console.log(`Input: ${word}`);
  console.log(`Output: ${reverseString.join("")}`);
  return reverseString.join("");
};
