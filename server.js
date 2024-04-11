const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const routes = require('./routes/index');
const path = require('path')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect("mongodb+srv://rootuser:WZqD1gPKvGm1THS9@restapi.ipm2yta.mongodb.net/RestAPI")
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use('/', routes); // Use routes defined in index.js

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
