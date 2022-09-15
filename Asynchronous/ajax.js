'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//setting AJAX, most old way
const request = new XMLHttpRequest();
request.open('GET', ''); // at '' we need to put in url
request.send();

//we need to use callback function for load api
//load this in HTML
request.addEventListener('load', function () {
  const [data] = JSON.parse(this.responseText);
  console.log(data);

  const html = ``;
  //${data.___}

  //at the top we had set html link
  countriesContainer.insertAdjacentHTML('beforeend', html);
});
