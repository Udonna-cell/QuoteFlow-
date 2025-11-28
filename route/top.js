const express = require("express");
const router = express.Router();
const { topQuote } = require("../utility/getQuote.js");


router.get("/", (req, res) => {
  let quote = topQuote();
  res.json(quote);
});

module.exports = router;
