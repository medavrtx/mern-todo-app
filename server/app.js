require('dotenv').config({ path: './config.env' });
const express = require('express');
const cors = require('cors');

const mongoConnect = require('./util/database').mongoConnect;

const todoRoutes = require('./routes/todo');

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(todoRoutes);

mongoConnect((client) => {
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port: ${process.env.PORT || 5000}`);
  });
});
