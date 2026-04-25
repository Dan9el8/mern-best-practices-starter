## Initializing the project
When creating a fullstack mern project, we need to install the following tools: • Node.js v20.10.0
       • Git v2.43.0
       • Visual Studio Code v1.84.2

You also need to install Visual Studio code as the code editor for developing fullstack mern applications from their official website https://code.visualstudio.com/
With IDE like VS Code, their is fully support of extentions which makes development easier. In mern development installation of extentions such as Docker, ESLint, Prettier, MongoDB for VS code are much helpful

Here all is set, now we need to start building our project and we will start with creating a folder (fullstack-mern)

Next, we open the folder in VS Code and navigate to the terminal and click new terminal to open.
Run npm create vite@latest
Follow the steps and runthe command npm run dev to start the development server
To ensure coding best practices, you will run the following command to install  prettier: Formats our code automatically according to a defined code style
.eslint: Analyzes our code and enforces best practices
. eslint-config-react: Enables rules in ESLint relevant to React projects
. eslint-config-prettier: Disables rules relating to code style in ESLint so that Prettier can handle them instead
. eslint-plugin-jsx-a11y: Allows ESLint to check for accessibility (a11y) issues in our JSX code
$ npm install --save-dev prettier@3.1.0 \
  eslint@8.54.0 \
  eslint-plugin-react@7.33.2 \
  eslint-config-prettier@9.0.0 \
  eslint-plugin-jsx-a11y@6.8.0

To configure prettier create a new file called .prettierrrc.json
Configuring eslint helps in ensuring unnecessary problems in a code are avoided at all cost, to do so, you first delete the automatically created .eslintrc.cjs and create a new file called .eslintrc.json
