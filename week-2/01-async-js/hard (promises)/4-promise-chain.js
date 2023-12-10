/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait(n, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`completed in time - ${n}`), n);
  });
}
function wait1(t) {

function waitOneSecond() {
  return wait(1 * 1000);
}

function waitTwoSecond() {
  return wait(2 * 1000);
}

function waitThreeSecond() {
  return wait(3 * 1000);
}

// async function calculateTime() {
//   const d1 = Date.now();
//   await waitOneSecond();
//   await waitTwoSecond();
//   await waitThreeSecond();
//   const d2 = Date.now();
//   console.log("TIme took-", d2 - d1);
// }

// calculateTime();


function calculateTime(t1, t2, t3) {

}

module.exports = calculateTime
