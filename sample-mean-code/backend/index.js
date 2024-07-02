// index.js
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('i am pratheeksha.');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
