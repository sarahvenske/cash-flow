# 💰 Cash-Flow: yearly bank account actity as a rewind

## About

This is a server-side rendering application that allows a user to visualize their yearly bank activity and generate trends and insights in the format of a rewind.

Feel free to contribute to this application!

## Technologies

- **Node.js:** A JavaScript runtime environment that enables server-side rendering and backend functionality.

- **Express:** A minimal and flexible web application framework for Node.js, used for building APIs and handling server-side logic.

- **EJS (Embedded JavaScript):** Is a template-engine for generating HTML marked up with JavaScript. It allows the embedding of JavaScript code directly within HTML templates, facilitating dynamic content rendering.

- **Libraries:** Chart.js to render graphics, Tailwindcss for pages styling.

## Getting Started

If you'd like to run the application locally, follow these steps:

1. Clone the repository: **git clone <repository-url>**
2. Make sure you have Node.js installed: node -v (if you don't, please visit **[Node.js](https://nodejs.org/en)**)
3. Navigate to the project directory: **cd back-end**
4. Install the dependencies: **npm install**
5. Create a database and setup an .env file based on the provided .env.example for proper connection. The app is designed to use PostgreSQL but you can choose any database that suits your needs.
6. Migrations are already generated, you just need to run them: **npm run typeorm migration:run -d ./src/data-source**
7. Input data to the databse by running file directely to the database: **input.sql**
8. Start the development server by running: **npm dev**
9. Render your page by running: **npx tailwindcss -i ./public/css/input.css -o ./public/css/output.css --watch**

## Features

- List of the top 5 most spent categories;
- The lowest spent category;
- Most used transaction method;
- Less used transaction method;
- Total amount spent during the year;
- Total amount income during the year;
- Total amount invested during the year;
- The biggest income source;
- Total transactions made;
- The user's name.

## Documentation

## Deploy

You can check the application **[here]()**
