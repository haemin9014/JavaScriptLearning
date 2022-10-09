"use strict";

//using array
let myArray = [11, 22, 34, 65, 34];
//will remove all the duplicate
let mySet = new Set(myArray);
mySet.add("100");
//will print out 11,22,34,65,100
mySet.add({ a: 1, b: 2 });
//will print out 11, 22, 34,65, object{a: 1, b: 2}
mySet.delete("100");
//will remove 100

mySet.size();

mySet.forEach(function (value) {
  console.log(value);
});

//using map
let myMap = new Map([
  ["a1", "Hello"],
  ["b2", "Goodbye"],
]);

//add
myMap.set("c3", "Foo");
//delete, delete by key
myMap.delete("a1");
//size
myMap.size();

//week set and week map
