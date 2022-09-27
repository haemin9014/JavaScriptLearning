//this function will basically keep running in the background while performing the code that inside of it.
const whereAmI = async function (country) {
  //we could use await keyword in async function
  //So basically await will stop decode execution at this
  //point of the function until the premise is fulfilled.
  //And so until the data has been fetched in this case
  //it is not blocking call state
  const res = await fetch();
  console.log(res);

  const data = await res.json();
  console.log(data);
};
whereAmI('portugal');
console.log('First');

//first will load it first and whereAMI will print out next(since it is waiting till all the data get load in fetch)
