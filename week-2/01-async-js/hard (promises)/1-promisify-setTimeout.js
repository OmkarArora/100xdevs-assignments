/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("completed", n));
  });
}

async function main() {
  const d1 = new Date().getTime();
  const val = await wait(100000000000000000000);
  console.log({ val, d1 });
  const d2 = new Date().getTime();
  console.log(d2 - d1);
}

main();

module.exports = wait;
