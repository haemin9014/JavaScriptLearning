let email = Symbol(); //Symbol email
let Employee = {
  name: "rajesh",
  phone: "9800000000",
  [email]: "rajesh@gamil.com",
};

let allKeys = Reflect.ownKeys(Employee); // all the keys of object employee
let privateKeys = Object.getOwnPropertySymbols(Employee); //only private keys symbols
let publicKeys = Object.getOwnPropertyNames(Employee); //Only public keys(non symbols)
