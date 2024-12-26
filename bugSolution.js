const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    // Asynchronous operation
    await someAsyncOperation();
    res.send('Hello');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(3000, () => console.log('Server started on port 3000'));

async function someAsyncOperation() {
  // Simulate an asynchronous operation
  await new Promise(resolve => setTimeout(resolve, 1000));
  throw new Error('Something went wrong');
}