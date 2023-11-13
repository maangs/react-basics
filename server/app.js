const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
// const port = process.env.PORT;

app.use(cors());

app.get('/test', (req, res) => {
  res.send([
    { id: 1, name: 'Johan' },
    { id: 2, name: 'Mange' },
  ]);
});

app.post('/', (req, res) => {
  res.send([
    { id: 1, name: 'Magnusson' },
    { id: 2, name: 'Dahlström' },
  ]);
});

app.listen(3001, () => {
  console.log(`server running at 3001`);
});
