/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function sleep(seconds) {
  console.log("Start");

  // Introduce a delay without blocking the main thread
  await delay(seconds * 1000);

  console.log("End");
}

async function main() {
  // Example usage: Asynchronously wait for 2000 milliseconds (2 seconds)
  await sleep(20);
  console.log("End of main");
}

main();
