# README for Express.js Server and AJAX Interaction Project

This README document provides a comprehensive overview of an Express.js server setup designed to handle various HTTP requests (GET, POST, PUT, DELETE) and a client-side HTML page that uses AJAX to interact with the server. This project demonstrates the use of Express.js for building a simple RESTful API and jQuery for making asynchronous requests from the client side.

## Project Overview

The project is structured into two main components: an Express.js server that handles HTTP requests for a specific route (`/grade`), and an HTML page that allows users to send these requests via buttons and display responses dynamically without reloading the page.

## Features

- **Express.js Server**:
  - Handles different HTTP methods: GET, POST, PUT, DELETE.
  - Serves an HTML file as the main page.
- **Client-side AJAX Requests**:
  - Uses jQuery to handle button clicks and make AJAX requests to the server.
  - Dynamically displays server responses in the HTML page.

## Server Setup

### Dependencies

- **Express.js**: Web application framework for Node.js.
- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.

### Server Code Explanation

- **Express Initialization**: Set up an Express application.
- **Middleware**: Use `express.json()` to parse JSON bodies.
- **Route Handling**:
  - Serve the `index.html` file at the root route (`/`).
  - Handle GET, POST, PUT, DELETE requests at the `/grade` route, responding with simple text messages.

### Running the Server

1. Ensure Node.js is installed.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Start the server using `node server.js`.
5. Access the web page via `http://localhost:3000/`.

## Client-side Setup

### HTML and JavaScript

- **HTML**: Contains buttons for each type of request and a div to display results.
- **jQuery**: Used for handling button click events and performing AJAX requests to interact with the server.

### AJAX Requests

- **GET**: Fetches a message from the server when the GET button is clicked.
- **POST**: Sends data to the server and fetches a response when the POST button is clicked.
- **PUT**: Updates data on the server and fetches a response when the PUT button is clicked.
- **DELETE**: Deletes data on the server and fetches a response when the DELETE button is clicked.

### Error Handling

- Displays error messages in the HTML page if an AJAX request fails.

## File Structure

- `server.js`: Main server file containing Express.js setup.
- `index.html`: Client-side HTML file with AJAX functionality.
- `package.json`: Contains metadata and dependencies for the Node.js application.
