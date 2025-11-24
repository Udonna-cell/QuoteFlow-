const fs = require("fs");
const path = require("path");

function quote() {
  let Quote = fs.readFileSync(path.resolve(__dirname, "../quotes.json"), "utf8");
  Quote = JSON.parse(Quote)
  return Quote
}
function getQuoteByID(id) {
  return ((quote()).filter((q) => {
    return (Number(q.id) == id)
  }))
}
function getQuoteByCategory(category) {
  return ((quote()).filter(q => q.category.toLowerCase() == category.toLowerCase()));
}
function getQuoteByAuthor(author) {
  return ((quote()).filter(q => q.author.toLowerCase() == author.toLowerCase()));
}

module.exports = {
  getQuoteByAuthor,
  getQuoteByID,
  getQuoteByCategory,
  quote,
}
