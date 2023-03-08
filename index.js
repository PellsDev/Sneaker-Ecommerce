const age = 2;

exports.xy = function printName(name) {
  console.log(`My name is ${name}`);
};
console.log(age);
const x = "James";

//Node Module System -> CommonJs
//module.exports & require

module.exports = {
  printName,
  age,
  y: 67,
};

// exports.key = 67;
// exports.sayMe = function me() {
//   console.log("yeses");
// };

// exports.sayMe2 = () => {
//   console.log("");
// };
//JavaScript -> ES6 Modules
//export & import
