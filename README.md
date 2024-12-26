# Unhandled Asynchronous Errors in Node.js Express.js Application

This repository demonstrates a common error in Node.js applications using Express.js: unhandled asynchronous errors.  Asynchronous operations, such as database queries or API calls, can reject promises, resulting in errors that are not gracefully handled.  Ignoring these errors can lead to crashes or unexpected behavior.

The `bug.js` file shows an example of an Express.js application where an asynchronous operation throws an error that is not handled properly.  The `bugSolution.js` file provides a solution that demonstrates how to use async/await and error handling to correctly manage the asynchronous error.

## How to Reproduce
1. Clone this repository.
2. Run `npm install express`.
3. Run `node bug.js`.
4. Observe the error message and the application's behavior.
5. Run `node bugSolution.js`.
6. Note the improved error handling.