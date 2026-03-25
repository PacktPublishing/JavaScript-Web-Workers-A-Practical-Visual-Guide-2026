// Create an array of 50 elements, each initialized to 1e9 (1,000,000,000).
// Array.from({ length: 50 }, () => 1e9)
// - The first argument { length: 50 } tells Array.from to create an array-like object with length 50.
// - The second argument is a mapping function: () => 1e9
//   This function is called once for each index (0 to 49), and its return value becomes the element at that index. Here, it always returns 1e9, so we get
//   [1000000000, 1000000000, ..., 1000000000] (50 times).

const tasks = Array.from({
    length: 50
}, () => 1e9); // [1000000000, 10000000000, etc]

const tick = performance.now();  // Record the current timestamp in milliseconds. This is natively available in node. No need to install modules (whew)

// simulating a heavy amount of tasks
for (const task of tasks) {
    let count = 0; 
    // incrementing 'count' on each iteration to simulate CPU work.
    for (let index = 0; index < task; index++) {
        count++;
    }
};

const tock = performance.now(); // Record the timestamp after all tasks have finished.

console.log(`Main thread took ${tock - tick}ms`); // Log how long the work took in milliseconds.

