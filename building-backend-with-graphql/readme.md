FullStack App Using React and GraphQL (Apollo Client and Apollo Server)
In this tutorial, we’ll walk through the steps to build a full-stack application using React and GraphQL, powered by Apollo Client on the frontend and Apollo Server on the backend. You'll learn how to set up the GraphQL server, define types and resolvers, and connect your React frontend with Apollo Client for seamless data management.

Source Code

If you prefer a video tutorial:


Introduction to GraphQL and the gql Language for Beginners
Before we dive into the code, let's take a moment to understand what GraphQL is and how it works. GraphQL is a query language for APIs, and it allows you to ask for exactly the data you need and nothing more. It’s like a flexible, efficient way to fetch data from your backend.

What is GraphQL?
GraphQL is a language for querying and manipulating data in APIs. Instead of asking for fixed data like you would with traditional REST APIs, GraphQL allows you to define the exact structure of the data you want. This can make your applications more efficient because you can request only what’s needed, reducing the amount of data sent over the network.

For example, if you want to fetch a list of users, GraphQL allows you to ask for just the fields you care about—like name and age—without pulling extra data you don’t need (like their email address).

GraphQL Queries
A query in GraphQL is a way to ask for data. You can think of it like making a request to the server to get specific pieces of information.

Here’s an example of a simple GraphQL query:

query {
  getUsers {
    id
    name
    age
  }
}
In this query:

getUsers is the field you want to retrieve data from.
Inside the curly braces, you list the specific fields (id, name, age) that you want to retrieve for each user.
This query tells the server, "Give me a list of users, but only include the id, name, and age fields for each user."

GraphQL Mutations
In GraphQL, mutations are used to create, update, or delete data. If queries are for reading data, mutations are for changing data. A mutation works similarly to a query, but it changes the data in the backend when executed.

Here’s an example of a mutation to create a new user:

mutation {
  createUser(name: "John Doe", age: 30, isMarried: true) {
    id
    name
  }
}
In this mutation:

createUser is the operation we want to perform (creating a new user).
Inside the parentheses, we provide the arguments (name, age, and isMarried) that are required to create the new user.
The fields inside the curly braces (id, name) specify what data we want returned after the mutation is executed.
Why Use GraphQL?
The main advantage of GraphQL over traditional REST APIs is its flexibility. With REST, you might have to make multiple requests to get related data from different endpoints. With GraphQL, you can get all the data you need in a single request, making it more efficient and faster.

The gql Tag in Apollo Client
In Apollo Client (and GraphQL in general), we use a special tag called gql to define GraphQL queries and mutations. It’s a way to mark your queries and mutations as GraphQL syntax.

Here’s an example of a GraphQL query using the gql tag in a React app:

import { gql } from "@apollo/client";

const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      name
      age
    }
  }
`;
In this code:

We import the gql function from Apollo Client.
The gql function helps define a GraphQL query in a JavaScript-friendly way.
GET_USERS is a query that fetches users' id, name, and age.
Now that we understand the basics of GraphQL and the gql tag, let's proceed with building the full-stack application.

Setting up a GraphQL Server with Apollo and Node.js
We start by setting up the GraphQL server using Apollo Server and Node.js. Below is the backend code where we define our user data and GraphQL API.

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const users = [
  { id: "1", name: "John Doe", age: 30, isMarried: true },
  { id: "2", name: "Jane Smith", age: 25, isMarried: false },
  { id: "3", name: "Alice Johnson", age: 28, isMarried: false },
];

const typeDefs = `
    type Query {
      getUsers: [User]
      getUserById(id: ID!): User
    }

    type Mutation {
      createUser(name: String!, age: Int!, isMarried: Boolean!): User
    }

    type User {
      id: ID
      name: String
      age: Int
      isMarried: Boolean
    }
`;

const resolvers = {
  Query: {
    getUsers: () => users,
    getUserById: (parent, args) => users.find((user) => user.id === args.id),
  },
  Mutation: {
    createUser: (parent, args) => {
      const { name, age, isMarried } = args;
      const newUser = {
        id: (users.length + 1).toString(),
        name,
        age,
        isMarried,
      };
      users.push(newUser);
      return newUser;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server Running at: ${url}`);
Key Points:
The GraphQL server is set up with Apollo Server.
We define the Query and Mutation types for handling user data.
We provide resolvers for fetching and creating users.
Understanding GraphQL Backend Type Definitions and Resolvers
In GraphQL, type definitions describe the structure of your data. Resolvers are functions that fetch data for specific queries or mutations.

Define GraphQL Types and Resolvers for User Data Management
In this section, we focus on managing user data. We create getUsers and getUserById queries to retrieve all users or a specific user by ID.

const resolvers = {
  Query: {
    getUsers: () => users,
    getUserById: (parent, args) => users.find((user) => user.id === args.id),
  },
};
Defining Required Fields in GraphQL Queries and Mutations
In GraphQL, you can define the required fields in your queries and mutations. In this example, we define a mutation to create a user with required fields: name, age, and isMarried.

const typeDefs = `
  type Mutation {
    createUser(name: String!, age: Int!, isMarried: Boolean!): User
  }
`;
Defining User Types and Resolvers for a GraphQL API
The User type defines the structure of a user object, including fields like id, name, age, and isMarried.

type User {
  id: ID
  name: String
  age: Int
  isMarried: Boolean
}
Implemented GraphQL Queries and User Creation Mutation
We successfully implement the GraphQL queries and mutations. The createUser mutation adds a new user to the users array, while getUsers retrieves the list of users.

const resolvers = {
  Mutation: {
    createUser: (parent, args) => {
      const newUser = { id: (users.length + 1).toString(), ...args };
      users.push(newUser);
      return newUser;
    },
  },
};
Successfully Running Apollo Server Enables GraphQL Queries Testing
Once the Apollo Server is running, you can use tools like Apollo Studio or Postman to test your GraphQL queries and mutations.

Setting Up Apollo Client in a React Application
Next, we integrate Apollo Client into the React application. This enables communication with the GraphQL API.

npm install @apollo/client graphql
import { ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000", // Your GraphQL server URL
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Welcome to the FullStack App</h1>
      </div>
    </ApolloProvider>
  );
}
Set up Apollo Client for GraphQL Access in a React App
With Apollo Client set up, we now query and mutate the GraphQL API from the React frontend.

Manage Data Loading and Error States in UI Components
We manage loading and error states in the React components when fetching data using Apollo Client.

if (getUsersLoading) return <p>Data loading...</p>;

if (getUsersError) return <p>Error: {error.message}</p>;
Learn to Query Specific Data with GraphQL's Flexibility
GraphQL gives you the flexibility to request only the data you need. Here's an example of a query to get user data by ID.

const GET_USER_BY_ID = gql`
  query GetUserById($id: ID!) {
    getUserById(id: $id) {
      id
      age
      name
      isMarried
    }
  }
`;
Managing Loading States and Displaying User Data in React
We manage the loading states and display the user data fetched from the server. Once the data is loaded, it is displayed in the UI.

{getUserByIdLoading ? (
  <p>Loading user...</p>
) : (
  <>
    <h1>Chosen User:</h1>
    <p>{getUserByIdData.getUserById.name}</p>
    <p>{getUserByIdData.getUserById.age}</p>
  </>
)}
Learn to Define and Use GraphQL Mutations for User Creation
We define a mutation for creating a new user and handle the mutation in the frontend when the user submits their details.

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $age: Int!, $isMarried: Boolean!) {
    createUser(name: $name, age: $age, isMarried: $isMarried) {
      name
    }
  }
`;

const handleCreateUser = async () => {
  createUser({
    variables: {
      name: newUser.name,
      age: Number(newUser.age),
      isMarried: false,
    },
  });
};
Updating User Details and Handling Input Data Types
We handle the input data types for creating a user and update the user details using the mutation.

<input
  placeholder="Name..."
  onChange={(e) =>
    setNewUser((prev) => ({ ...prev, name: e.target.value }))
  }
/>
<input
  placeholder="Age..."
  type="number"
  onChange={(e) =>
    setNewUser((prev) => ({ ...prev, age: e.target.value }))
  }
/>
<button onClick={handleCreateUser}>Create User</button>
Now, the newly created user will be added to the list, and we can see the updated data displayed in the UI.

Congratulations! You've successfully learned how to build a full-stack app using React and GraphQL, with Apollo Client and Apollo Server. You've created a GraphQL API, connected your React frontend, and managed data loading, errors, and mutations.

Happy coding!