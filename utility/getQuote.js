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
function paginated(start, limit) {
  return (quote().slice(start, start + limit))
}
function topQuote() {
  if (!(quote()).length) return null; // return null if array is empty
  return (quote()).reduce((maxObj, current) => {
    return current.likes > maxObj.likes ? current : maxObj;
  });
}

module.exports = {
  getQuoteByAuthor,
  getQuoteByID,
  getQuoteByCategory,
  quote,
  paginated,
  topQuote,
}
