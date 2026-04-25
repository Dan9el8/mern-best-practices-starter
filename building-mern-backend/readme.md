## Building MERN Backend With Express, Mongoose and Jest for testing
Express is mainly used in providing RESTful API, Mongoose is an Object Data Model that is used to interact with MongoDB and lastly Jest is a framework that is used to test MERN applications code.
We will first learn how to structure a backend project using an architectural pattern. Then, we will create database schemas using Mongoose. Next, we will make service functions to interface with the database schemas and write tests for them using Jest. Then, we will learn what REST is and when it is useful. Finally, we provide a REST API and serve it using Express.
One of the most used architectural pattern in MERN is Model View Controller(MVC)
Model - Handles data
View - Displays state of data
Controller - Controls how data is processed and displayed

As an illustration we are going to demonstrate how to build a backend system using a simple app that does the following:
• Get a list of posts
• Get a single post
• Create a new post
• Update an existing post
• Delete an existing post

First we will have to create a database schema using mongoose
Install *npm install mongoose*

After that we will then use afolder structure src/db/mongooseconfig.js

Next is creating a model for our application in src folder src/db/models/post.js

To test how the models works we are going to create a file called example.js

We will next create a post service in a service/post.js folder
To test our service we will use jest in a folder _test_/post.test.js

There is also a Jest extension for VS Code, which we can use to make running tests more visual. The extension is especially helpful for larger projects where we have many tests in multiple files. Additionally, the extension can automatically watch and re-run tests if we change the definitions.
To usetheextention download it from VS Code extention (Orta.vscode-jest)
To facilitate the communication between th backend andthe frontend we need express.jsfor managing RESTful services.
We start by installing express with the following command:
npm install express

We then create a file called app.js in src/app.js

Next, we need to create a server and specify a port, similar to what we did before when creating an HTTP server. To do so, we create a new src/index.js file. In this file, we import the Express app:

After that you can now edit the package.json file and add:
"scripts": {
    "start": "node src/index.js",
}

We can now start creating our api routes in folder src/routes/post.js
