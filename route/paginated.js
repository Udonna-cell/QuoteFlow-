const express = require("express");
const router = express.Router();
const { paginated } = require("../utility/getQuote.js")

router.get("/quotes", (req, res) => {
  let { page, limit } = req.query;
  let pagination = paginated(page, limit);
  res.json(pagination, pagination.length);
});

module.exports = router;
