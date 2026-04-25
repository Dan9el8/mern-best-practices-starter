## Application depployment using Docker
In this module e are going to deploy our application using docker, which we installed in our initializing-the-project
We will package our application into docker images and learn how to deploy them using CI/CD principles.
we first need
to create a Dockerfile, which contains all the instructions needed to build the Docker image. First,
We will create a Docker image for our backend service and run a container from it. Then, we will do the same for our frontend. Finally, we will create a Docker Compose file to start our database and backend services together with our frontend.
A Dockerfile tells Docker step by step how to build the image. Each line in the file is an instruction telling Docker what to do. The format of a Dockerfile is as follows:
# comment
INSTRUCTION arguments
To demonstrate we will build our dockerfile inside Dockerfile

The CMD instruction is not executed while building the image. Instead, it stores information in the metadata of the image, telling Docker which command to run when a container is instantiated from the image.
After creating our Dockerfile, we should also create a .dockerignore file to make sure unnecessary files are not copied into our image.

Next is to build our docker image and to do so, you go to your terminal and run the following command
$ docker image build -t blog-backend backend/
We specified blog-backend as the name of our image and backend/ as the working directory.

Next we will create and run a container for our own image, to do so, in your terminal run:
$ docker images

This command should return the blog-backend image that we just created,
We are now done with creating a docker image of our file, next is to create the docker image for the frontend.

First we Create a new Dockerfile in the root of our project.

Next is creating docker image for the frontend
Just like before, we execute the docker build command to build the image, giving it the nameblog-frontend and specifying the root directory as the path:
In the terminal, run the following command:
$ docker build -t blog-frontend .

After that we create and run the frontend docker container
$ docker run -it -p 3000:80 blog-frontend

Docker Compose is a tool that allows us to define and run multi-container applications with Docker. Instead of manually building and running the backend, frontend, and database containers, we can use Compose to build and run them all together.
To do so we need to create compose.yaml file

Now to run all services using docker compose, you run the following commands in the terminal:
$ docker compose up

After experimenting with Docker for a while, there will be lots of images and containers that are not in use anymore. Docker generally does not remove objects unless you explicitly ask it to, causing it to use a lot of disk space. If you want to remove objects, you can either remove them one by one or use one of the prune commands provided by Docker:

• docker container prune: This removes all stopped containers
• docker image prune: This removes all dangling images (images not tagged and not referenced by any container)
• docker image prune -a: This removes all images not used by any containers
• docker volume prune: This removes all volumes not used by any containers
• docker network prune: This cleans up networks not used by any containers
• docker system prune: This prunes everything except volumes
• docker system prune --volumes: This prunes everything

Next we will demonstrate how to deploy our application on the cloud so that anyone can get access to it

For MongoDB we will use atlas and Google Cloud
1. Go to https://www.mongodb.com/atlas and press Try Free to create a new account, or sign in with your existing account.
2. Select Database from the sidebar, then press Create to create a new database deployment. If you made a new account, you should be asked to create a new database deployment automatically.
3. Select Shared / M0 Sandbox (free instance) on Google Cloud and your preferred region.
4.Give your cluster a name of your choice.
5.Press Create to create your M0 sandbox cluster. It will take some time for the database to be accessible (typically around a minute). However, you can continue setting up the user while waiting for the cluster to be set up.
6.Go to the Database section in the sidebar and click on the Connect button next to your newly created cluster.
7.In the popup, select Allow Access from Anywhere and then press Add IP Address.
8.Set a username and password for your database user and press Create database user.
9.Press Choose a connection method and select Drivers.
10. A connection string will be shown; copy it and save it for later, inserting your previously set password instead of the <password> string. The connection string should have the following format:
mongodb+srv://<username>:<password>@<cluster-name>.<cluster-id>.mongodb.net/?retryWrites=true&w=majority

Now that we have successfully created our MongoDB database in the cloud, we can move on to setting up Google Cloud to deploy our backend and frontend.

1.Go to https://cloud.google.com in your browser.
2.Press Get started for free if you do not have an account yet or press Sign in if you already have an account.
3.Log in with your Google account and follow the instructions until you have access to the Google Cloud console.

Before we can deploy a service on a cloud provider, we first need to deploy our Docker image to a Docker registry so that the cloud provider can access it from there and create a container from it.
1.Go to https://hub.docker.com and log in or register an account there.
2.Press the Create repository button to create a new repository. The repository will contain our image.
3.Enter blog-frontend as the repository name and leave the description empty and visibility public. Then press the Create button.
4.Repeat Steps 2 and 3, but this time, enter blog-backend as the repository name.
5. Open a new terminal and enter the following command to log in to your Docker Hub account:
$ docker login
Enter your username and password from Docker Hub and press the Return key or Enter.
6. Rebuild your image for Linux (to be able to deploy it to Google Cloud later), tag your image with your repository name (replace [USERNAME] with your Docker Hub username), and push it to the repository:
$ docker build --platform linux/amd64 -t blog-frontend .
$ docker tag blog-frontend [USERNAME]/blog-frontend
$ docker push [USERNAME]/blog-frontend

7. Navigate to backend/ in the terminal and repeat Step 6 for the blog-backend image:
$ cd backend/
$ docker build --platform linux/amd64 -t blog-backend .
$ docker tag blog-backend [USERNAME]/blog-backend
$ docker push [USERNAME]/blog-backend

Next we will deploy frontend docker image to cloud using the following steps:
1.Go to https://console.cloud.google.com/.
2.In the search bar at the top, enter Cloud Run and select the Cloud Run – Serverless for containerized applications product.
3.Press the Create Service button to create a new service.
4.Enter [USERNAME]/blog-backend in the Container image URL box.
5.Enter blog-backend in the Service name box, select a region of your choice, leave CPU is only allocated during request processing selected, and select All – Allow direct access to your service from the Internet and Authentication – Allow unauthenticated invocations.
6.Expand the Container, Networking, Security section, scroll down to Environment variables, and click on Add Variable.
7.Name the new environment variable DATABASE_URL and, as the value, enter the connection string from MongoDB Atlas, which you saved earlier.
8.Leave the rest of the options as the default options and press Create.
9.You will get redirected to the newly created service, where the container is currently being deployed. Wait until it finishes deploying, which can take up to a couple of minutes.
10. When the service finishes deploying, you should see a checkmark and a URL. Click the URL to open the backend and you will see our Hello World from Express! message, which means that our backend was successfully deployed in the cloud!

WE will also deploy the frontend docker image to thwe cloud using the following steps:
For the frontend, we first need to rebuild the container to change the VITE_BACKEND_URL environment variable, which is statically built into our project. Let’s do that first:
1. Open a terminal and run the following command to rebuild the frontend with the environment variable set:
$ docker build --platform linux/amd64 --build-arg "VITE_BACKEND_
URL=[URL]/api/v1" -t blog-frontend .
Make sure to replace [URL] with the URL to the backend service deployed on Google Cloud Run.
2. Tag it with your Docker Hub username and deploy the new version of the image to Docker Hub:
$ docker tag blog-frontend [USERNAME]/blog-frontend
$ docker push [USERNAME]/blog-frontend

1.Create a new Cloud Run service, enter [USERNAME]/blog-frontend in the Container image URL box and blog-frontend in the Service name box.
2.Pick a region of your choice and enable Allow unauthenticated invocations.
3.Expand Container, Networking, Security and change the container port from 8080 to 80.
4.Press Create to create the service and wait for it to be deployed.
5.Open the URL in your browser and you should see the deployed frontend. Adding and listing blog posts also works now by sending a request to the deployed backend, which then stores the posts in our MongoDB Atlas cluster.

Next we will use Github Actions for CI/CD, to do so we create a folder structure
.github/workflows
Frontend CI will be in frontend-ci.yaml
Backend CI will be in backend-ci.yaml

Save the workflow files and commit and push them to a GitHub repository by creating a new repository on GitHub and following their instructions to push an existing repository to GitHub.

Go to the repository on GitHub and select the Actions tab. You should see your workflows running here.

Next is to set up CD to automatically deploy our changes after merging requests First, we need to get the credentials to authenticate with Docker Hub and Google Cloud. Then, we can set up the workflow for deploying our application

After getting the credentials, we need to create a file cd.yaml in .github/workflows/cd.yaml folder structure