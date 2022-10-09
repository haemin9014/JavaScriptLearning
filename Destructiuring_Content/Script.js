//sample
const [one, two, three] = [1, [2, 3], [4, 5]];
//one=> 1 two=> [2,3], three=>[4,5]
var [, second, ,] = ["chennai", "mumbai", "goa", "cochin"];
//console.log(second);  => mumbai
var {
  firstName: first,
  lastName: last,
  ...details
} = {
  firstName: "Neha",
  lastName: "Singh",
  age: 40,
  city: "chennai",
  phone: 980000000,
};

console.log(first, details);
//output: Neha {age: 40, city: "chennai", phone: 980000000}

var states = [["Tamilnadu"], ["Punjab", "Haryana"]];
const [Chennai, Chandigarh] = states;

console.log(Chennai);
console.log(Chandigarh);
console.log(states);
