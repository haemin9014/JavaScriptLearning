//it comes with fetch.
const request = fetch('https://restcountries.eu/rest/v2/name/portugal');
//when we log request, it will print out Promise.
const btn = document.querySelector('.btn-country');

const renderError = function(msg) {//when we want to user to see the error
    .insertAdjacentText('before..', msg);
}

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
    .then(data => console.log(data))
    .catch(err => console.error(`${err}`))//when promise is rejected.
    .finally(() => {});//always need to happen no matter promise was successful or not
};

btn.addEventListener('click', () => getCountry('portugal'));
getCountry('portugal');
