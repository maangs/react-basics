const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Works like a charm');
});

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
