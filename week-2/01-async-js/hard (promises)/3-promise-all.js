/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait(n, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`completed in time - ${n}`), n);
  });
}

function waitOneSecond() {
  return wait(1 * 1000);
}

function waitTwoSecond() {
  return wait(2 * 1000);
}

function waitThreeSecond() {
  return wait(30 * 1000);
}

async function calculateTime() {
  const values = await Promise.all([
    waitOneSecond(),
    waitTwoSecond(),
    waitThreeSecond(),
  ]);
  console.log("VALUES", values);
}

calculateTime();
