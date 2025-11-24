const express = require('express');
const randomQuote = require("./route/random");
const qouteCategory = require("./route/category");
const authorQuote = require('./route/author');

const app = express();
const port = 3000;

// A simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use("/quotes/random", randomQuote);
app.use("/quotes/category", qouteCategory);
app.use("/quotes/author", authorQuote);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
