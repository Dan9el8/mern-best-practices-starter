## Intergrating the backend with react frontend
For full-stack projects, it additionally makes sense to first separate our code by creating separate folders for the API integration and UI components.
First we will create an src/api folder
And also src/component folder

The idea of components in react is to have each file deal with its own UI element
When developing frontend side, we normally have UI mock ups first before writting the code When splitting up the UI into components, we use the single-responsibility principle, which states that every module should have responsibility over a single encapsulated part of the functionality.
In our mock-up, we can draw boxes around each component and subcomponent, and give them names.

Next will create a post component to explain how react works under the hood
src/components/post.jsx

We will also create another component called createPost.js
src/components/createPost.jsx

To test how our components works, we can create a file called app.jsx and rerun the application to see how the interface looks like
src/app.jsx

Similar to the CreatePost component, we will be creating two components that provide input fields to filter and sort posts.
src/components/postFilter.jsx

Next, we are going to define the PostSorting component.
src/components/postSorting.jsx

Then lastly we will create our last component for listing all the posts under
src/components/postListing.jsx

After that we ensure all our components are registered in our app.jsx file and reload to see if the project runs correctly

If it runs correctly you should see your page loading with full interface of the application.

Next we will move into intergrating the frontend and the backend, and the tool used will be Tanstack Query formally React Query which is a data fetching library that can also help us with caching, synchronizing, and updating data from a backend. 

To get started with Tanstack you have to install it through the terminal
$ npm install @tanstack/react-query