'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//sample for callback
const renderCountry = function (data) {
  const html = `${data}`;
};

const getCountry = function (country) {
  renderCountry(country);

  const [neighbour] = data.borders;

  //if neighbour is empty just return null
  if (!neighbour) {
    return;
  }
};

getCountry('USA');
