//it comes with fetch.
const request = fetch('https://restcountries.eu/rest/v2/name/portugal');
//when we log request, it will print out Promise.

const getCountry = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      const neighbour = data[0];
      console.log(data[0]);

      if (!neighbour) {
        return;
      }

      //search country neighbour list
      fetch(`https://restcountries.eu/rest/v2/name/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => console.log(data));
};

getCountry('portugal');
