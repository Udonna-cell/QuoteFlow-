

QuoteFlow — Random Quotes API

QuoteFlow is a lightweight RESTful API for retrieving random quotes, searching quotes by category or author, and managing quotes through secure admin endpoints. It provides fast access to motivational, inspirational, and life-related quotes.


---

🚀 Features

✅ Retrieve a random quote

✅ Get quotes by category or author

✅ Admin-only quote creation, updating, and deletion

✅ Like a quote

✅ Fetch top liked quotes

✅ Pagination support for browsing quotes



---

📦 Installation

Requirements

Node.js v14 or higher


Setup

1. Clone the repository



git clone https://github.com/your-username/QuoteFlow.git
cd QuoteFlow

2. Install dependencies



npm install

3. Configure environment variables
Create a .env file in the root directory:



PORT=3000
ADMIN_TOKEN=your_admin_token_here

4. Start the server



npm start

> The API will run at: http://localhost:3000




---

📘 API Documentation

1. Get a Random Quote

Endpoint: GET /quotes/random
Description: Returns one random quote.

Example Response

{
  "id": "123",
  "text": "Life is what happens when you're busy making other plans.",
  "author": "John Lennon",
  "category": "life",
  "likes": 15
}


---

2. Get Quotes by Category

Endpoint: GET /quotes/category/:category
Example:
GET /quotes/category/motivation

Response

[
  {
    "id": "124",
    "text": "The only limit to our realization of tomorrow is our doubts of today.",
    "author": "Franklin D. Roosevelt",
    "category": "motivation",
    "likes": 20
  }
]


---

3. Get Quotes by Author

Endpoint: GET /quotes/author/:author
Example:
GET /quotes/author/Mark Twain

Returns all quotes written by the specified author.


---

4. Add a New Quote (Admin Only)

Endpoint: POST /quotes
Headers:
Authorization: Bearer <token>

Request Body

{
  "text": "Do what you can, with what you have, where you are.",
  "author": "Theodore Roosevelt",
  "category": "inspiration"
}

Response

{
  "message": "Quote added successfully!",
  "quote": {
    "id": "125",
    "text": "Do what you can, with what you have, where you are.",
    "author": "Theodore Roosevelt",
    "category": "inspiration",
    "likes": 0
  }
}


---

5. Update an Existing Quote (Admin Only)

Endpoint: PUT /quotes/:id
Headers:
Authorization: Bearer <token>

Request Body

{
  "text": "Updated quote text."
}


---

6. Delete a Quote (Admin Only)

Endpoint: DELETE /quotes/:id
Headers:
Authorization: Bearer <token>

Response

{ "message": "Quote deleted successfully!" }


---

7. Get All Quotes (Paginated)

Endpoint: GET /quotes?page=1&limit=10
Description: Retrieve quotes in paginated format.


---

8. Like a Quote

Endpoint: POST /quotes/:id/like
Description: Increments a quote’s like counter.

Response

{
  "message": "Quote liked!",
  "likes": 21
}


---

9. Get Most Liked Quotes

Endpoint: GET /quotes/top
Description: Returns quotes with the highest like counts.


---

🛠️ Development Scripts

Command	Description

npm start	Start server
npm run dev	Start server with nodemon (if configured)



---

🤝 Contributing

Contributions are welcome!
To contribute:

1. Fork the repository


2. Create a new branch


3. Commit your changes


4. Submit a pull request




---

📄 License

This project is licensed under the MIT License.


