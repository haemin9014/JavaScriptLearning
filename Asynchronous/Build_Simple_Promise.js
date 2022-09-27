//it is built in objects
//it is so-called executor function.
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('LOtter draw is happening');
  //setTimeout give async action.
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      //we win the promise, fulfilled promise
      resolve('You Win');
    } else {
      //reject promise
      reject(new Error('err'));
    }
  }, 2000);
});

//res value will be resolve()
//err value will be reject()
lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

//promisifying setTimeout
const wait = function (seconds) {
  //since we are going to use timeout we don't need reject because it will never fail.
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 seconds'));
