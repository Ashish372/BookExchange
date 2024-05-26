# Book Exchange Platform

Welcome to the Book Exchange Platform, a Node.js application that facilitates book enthusiasts in exchanging books. Users can seamlessly sign up, log in, add books for exchange, view available books, update book details, and delete books. To ensure secure access and seamless authorization, the application utilizes JWT (JSON Web Tokens).

## Features

- **User Authentication**: Users can securely sign up and log in to access the platform's features.
- **Book Management**: Users can add, view, update, and delete books for exchange.
- **Token-Based Authentication**: The application employs JWT for robust authentication and authorization mechanisms.
- **Error Handling**: Graceful error handling ensures smooth user experience.

## Getting Started

1. **Installation**:
   - Clone the repository: `git clone <repository-url>`
   - Install dependencies: `npm install`

2. **Configuration**:
   - Set up environment variables in a `.env` file, including `PORT`, `MONGODB_URI`, `JWT_SECRET`, `JWT_EXPIRES_IN`, and `JWT_COOKIE_EXPIRES_IN`.

3. **Running the Application**:
   - Start the server: `npm start`

## Usage

- **Sign Up**: New users can register by providing their name, email, password, and password confirmation.
- **Log In**: Registered users can log in using their email and password.
- **Add Book**: Users can add new books for exchange by specifying the title, author, description, exchange type, and status.
- **View Books**: Browse through the collection of available books listed on the platform.
- **Update Book**: Book owners can update book details, including title, author, description, exchange type, and status.
- **Delete Book**: Book owners have the option to remove their books from the platform.

## Middleware

- **Authentication**: The `authenticate` middleware ensures that only authenticated users can access specific routes.
- **Authorization**: The `authorize` middleware verifies whether authenticated users have the necessary permissions to perform certain actions.

## Dependencies

- **Express**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing user and book data.
- **jsonwebtoken**: Library for generating and verifying JSON Web Tokens.
- **crypto**: Node.js module for cryptographic functions.
- **mongoose**: MongoDB object modeling tool.
- **dotenv**: Module for loading environment variables from a `.env` file.
- **ejs**: Embedded JavaScript templating for rendering HTML templates.
- **cookie-parser**: Middleware for parsing cookies in the request object.
