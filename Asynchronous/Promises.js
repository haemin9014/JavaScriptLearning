//it comes with fetch.
const request = fetch('https://restcountries.eu/rest/v2/name/portugal');
//when we log request, it will print out Promise.

const getCountry = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(function (response) {
      //when we call data we need to use json method for data
      return response.json();
      //json we call promise
    })
    //since it is promise need to use then
    .then(function (data) {
      //will call the data
      //load using data[0];
      console.log(data[0]);
    });
};

getCountry('portugal');
