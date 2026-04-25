# MERN Best Practices

A curated collection of practical examples, tutorials, and reference material for building modern MERN stack applications.

## Repository overview

This repository is organized as a set of focused learning modules demonstrating how to build, connect, deploy, test, and secure MERN-style applications. Each folder contains one or more examples that can be read, inspected, and adapted into your own projects.

## Topics and what they cover

- `building/`
  - Backend and fullstack examples that show API design patterns, middleware usage, and MongoDB integration.
  - Good starting place if you want concrete patterns for building Node/Express services in a MERN application.

- `building-backend-with-graphql/`
  - Step-by-step GraphQL backend implementation.
  - Includes schema design, resolver examples, and integration notes for connecting GraphQL to a MongoDB-backed service.

- `building-fullstack-application-with-next.js/`
  - Next.js fullstack app walkthrough and supporting files.
  - Shows how to wire frontend pages, API routes, and server-side rendering/SSR concepts with React.

- `building-mern-backend/`
  - Express backend example with MongoDB models, routes, services, and tests.
  - Includes `app.js`, `index.js`, `mongooseconfig.js`, and service-based organization for maintainable backend code.

- `connecting-with-frontend/`
  - React frontend examples for connecting to backend APIs.
  - Contains components for creating posts, listing posts, filtering, and sorting, plus basic client-side state management.

- `deploying-the-application/`
  - Docker Compose and deployment configuration examples.
  - Includes separate `backend/` and `frontend/` Dockerfiles plus a `compose.yaml` for multi-container deployment.

- `end-to-end-testing-with-playwright/`
  - Playwright E2E testing sample and guidance.
  - Useful for validating full application flows from the user interface down through backend behavior.

- `event-based-application/`
  - Notes and examples for event-driven architecture.
  - Helps you understand how to structure applications using events rather than tightly coupled request/response logic.

- `fullstack-application-with-next.js/`
  - Additional Next.js resources for fullstack development.
  - Use this folder as a secondary reference for Next.js project structure and example patterns.

- `initializing-the project/`
  - Project initialization notes and starter guidance.
  - Covers how to bootstrap a new MERN project and configure the initial project files.

- `search-engine-optimization/`
  - SEO utilities, metadata examples, and sitemap generation.
  - Includes `generateSitemap.js`, `meta.jsx`, `robot.txt`, and server-side SEO setup.

- `server-side-rendering/`
  - Server-side rendering examples for React applications.
  - Includes example React entry points and Express server setup to render pages on the server.

- `understanding-authentication-with-jwt/`
  - JWT authentication example with middleware, user model, routes, and service logic.
  - Great for learning how to protect routes, sign tokens, and validate requests.

- `understanding-mongodb/`
  - MongoDB connection and usage examples.
  - Shows the basics of connecting to MongoDB from Node and using the database in a MERN workflow.

- `understanding-react-server-components/`
  - Notes on React Server Components.
  - Helps explain when to use server-rendered components and how they differ from traditional client-side React.

## How to use this repository

1. Start by reading the top-level `readme.md` for the module you are interested in.
2. Explore the example code and folder structure for patterns that match your application needs.
3. Run the sample apps locally when available, and adapt the code into your own project.
4. Use the tests and deployment examples as reference for quality and deployable setup.

## Clone this repository

```bash
git clone https://github.com/dan9el4/mern-best-practices-starter.git
cd mern-best-practices
```

If you have a fork, replace the remote URL with your fork's URL:

```bash
git clone https://github.com/dan9el8/mern-best-practices-starter.git
cd mern-best-practices
```

## Contributing

We welcome contributions that improve examples, add clarity, or provide new MERN best practices.

1. Fork the repository.
2. Create a new branch with a descriptive name, for example `feature/add-nextjs-example` or `fix/readme-typos`.
3. Make your changes and ensure examples are clear and functional.
4. Add or update documentation in the relevant module `readme.md`.
5. Commit with a clear message describing what you changed.
6. Open a pull request and include a short summary of your changes.

### Contribution tips

- Keep examples small and focused.
- Prefer simple, readable code over complex abstractions.
- Document assumptions and setup steps for each module.
- If you add a new module, include a `readme.md` in that folder explaining its purpose.

## Notes

- This repository is a learning resource and reference collection, not a production scaffold.
- Some folders contain example apps, tests, and deployment files that can be adapted or extended.

## License

Feel free to use and adapt these examples for learning and prototyping.
