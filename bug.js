const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation
  someAsyncOperation().then(() => {
    res.send('Hello');
  }).catch(error => {
    console.error(error);
    // This error is not handled properly
  });
});
app.listen(3000, () => console.log('Server started on port 3000'));

async function someAsyncOperation() {
  // Simulate an asynchronous operation
  await new Promise(resolve => setTimeout(resolve, 1000));
  throw new Error('Something went wrong');
}