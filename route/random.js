const express = require("express");
const router = express.Router();
const { quote, getQuoteByID } = require("../utility/getQuote")

// a get request that gets random quote 
router.get("/", (req, res) => {
  let quoteLength = quote().length;
  let random = Math.floor(Math.random() * (quoteLength - 1 + 1)) + 1;
  let randomQuote = getQuoteByID(random);
  res.json(randomQuote)
})

module.exports = router
