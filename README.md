#QuoteFlow - Random Quotes API

QuoteFlow is a simple RESTful API that provides random quotes, allows users to search quotes by author or category, and lets admins manage the quote collection.

##Features

✅ Get a random quote
✅ Fetch quotes by category or author
✅ Add new quotes (Admin only)
✅ Update or delete quotes (Admin only)
✅ Like a quote
✅ Get most liked quotes

##Installation

###Requirements:

- Node.js (>=14)

- MongoDB (or another database if preferred)


###Setup:

1. Clone the repository:
```sh
git clone https://github.com/your-username/QuoteFlow.git
cd QuoteFlow
```


2. Install dependencies:
```sh
npm install
```

3. Create a .env file and configure your database:
```sh
PORT=5000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
```

4. Start the server:
```sh
npm start
```
The API will be available at http://localhost:5000.




---

##API Endpoints

1. Get a Random Quote

Endpoint: GET /quotes/random

Description: Returns a random quote.

Example Response:
```json
{
  "id": "123",
  "text": "Life is what happens when you're busy making other plans.",
  "author": "John Lennon",
  "category": "life",
  "likes": 15
}
```



---

2. Get Quotes by Category

Endpoint: GET /quotes/category/:category

Description: Fetch quotes in a specific category.

Example:

GET /quotes/category/motivation

Response:
```json
[
  {
    "id": "124",
    "text": "The only limit to our realization of tomorrow is our doubts of today.",
    "author": "Franklin D. Roosevelt",
    "category": "motivation",
    "likes": 20
  }
]
```


---

3. Get Quotes by Author

Endpoint: GET /quotes/author/:author

Description: Retrieve quotes from a specific author.

Example:

GET /quotes/author/Mark Twain



---

4. Add a New Quote (Admin Only)

Endpoint: POST /quotes

Headers: Authorization: Bearer <token>

Request Body:
```json
{
  "text": "Do what you can, with what you have, where you are.",
  "author": "Theodore Roosevelt",
  "category": "inspiration"
}
```
Response:
```json
{
  "message": "Quote added successfully!",
  "quote": { "id": "125", "text": "...", "author": "..." }
}
```


---

5. Update an Existing Quote (Admin Only)

Endpoint: PUT /quotes/:id

Headers: Authorization: Bearer <token>

Request Body:
```json
{
  "text": "Updated quote text."
}
```


---

6. Delete a Quote (Admin Only)

Endpoint: DELETE /quotes/:id

Headers: Authorization: Bearer <token>

Response:
```json
{ "message": "Quote deleted successfully!" }
```


---

7. Get All Quotes (Paginated)

Endpoint: GET /quotes?page=1&limit=10

Description: Fetch a paginated list of quotes.



---

8. Like a Quote

Endpoint: POST /quotes/:id/like

Description: Increases the like count for a quote.

Response:
```json
{ "message": "Quote liked!", "likes": 21 }
```


---

9. Get Most Liked Quotes

Endpoint: GET /quotes/top

Description: Returns the most liked quotes.



---

##Contributing

Feel free to contribute by submitting a pull request.

##License

This project is licensed under the MIT License.
