const express = require('express');

const cors = require('cors');
require('dotenv').config({ path: './config.env' });
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(require('./routes/todo'));

const dbo = require('./db/conn');

app.listen(port, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
