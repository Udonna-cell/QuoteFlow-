const express = require("express");
const { getQuoteByCategory } = require("../utility/getQuote")
const router = express.Router();

// get quotes by categories by a server request
router.get("/:category", (req, res) => {
  let quotes = getQuoteByCategory(req.params.category);
  res.json(quotes)
})

module.exports = router;
