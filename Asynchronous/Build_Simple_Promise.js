//it is built in objects
//it is so-called executor function.
const lotteryPromise = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    //we win the promise, fulfilled promise
    resolve('You Win');
  } else {
    //reject promise
    reject('err');
  }
});

//res value will be resolve()
//err value will be reject()
lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));
