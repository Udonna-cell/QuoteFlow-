const express = require("express");
const { getQuoteByAuthor } = require("../utility/getQuote");
const router = express.Router();

// get quotes from an autgor by a server request
router.get("/:author", (req, res) => {
  let quotes = getQuoteByAuthor(req.params.author);
  res.json(quotes);
})

module.exports = router;
