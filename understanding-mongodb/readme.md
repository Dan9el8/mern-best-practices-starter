## Understanding-mongodb
In this folder we will understand how to run scrpts with node, introducing docker, mongodb document database, and learn how to access mongodb database using node.js
Docker is a platform that enable people to build run and manage applicationsin loosely coupled environments called containers.
Docker is used
We can set up a servicer or an app without having a big problemin managing dependancies conflicts There are also other tools, such as Podman (which even has a compatibility layer for the Docker CLI commands), and Rancher Desktop, which also supports Docker CLI commands.
Docker consist of three parts: 
• Docker Client: Can run commands by sending them to the Docker daemon, which is either running on the local machine or a remote environment.
• Docker Host: Contains the Docker daemon, images, and containers.
• Docker Registry: Hosts and stores docker images, extensions, and plugins. By default, the public registry Docker Hub will be used to search for images.
Docker image
Docker Container

To install docker download it from their official website https://www.docker.com/products/docker-desktop/
To confirm installation in the terminal, run docker -v
To create a docker container run the docker run command
$docker run -i -t domak:24.04 /bin/bash
Ubuntu container and run in a shell (/bin/bash)
The :24.04 string after the image name is called the tag, and it can be used to pin images to certain versions.
A new shell will open. We can verify that this shell is running in the container by executing the following command to see which operating system is running:
$ uname -a

If you get a version number that ends with -linuxkit, you have successfully run a command in the container, because LinuxKit is a toolkit to create small Linux VMs!
To exit the shell type in the command line
$exit
You can also access docker using docker extention in the VS Code
To set up MongoDB server make sure Docker desktop is running and docker is started.
To verify if everything is running correctly run the following command
$docker ps
Run the following command to create new container with a MongoDB server
$docker run -d --name dbserver -p 27017:27017 --restart unless-stopped mongo:6.0.4
 -d: Runs the container in the background (daemon mode).
 --name: Specifies a name for the container. In our case, we named it dbserver.
 -p: Maps a port from the container to the host. In our case, we map the default MongoDB server port 27017 in the container to the same port on our host. This allows us to access the MongoDB server running within our container from outside of it. If you already have a MongoDB server running on that port, feel free to change the first number to some other port, but make sure to also adjust the port number from 27017 to your specified port in the following guides.
 --restart unless-stopped: Makes sure to automatically start (and restart) the container unless we manually stop it. This ensures that every time we start Docker, our MongoDB server will already be running. 
 mongo: This is the image name. The mongo image contains a MongoDB server.
Next is to install mongoDB shell from their website (https://www.mongodb.com/docs/mongodb-shell/install/).
On your host system, run the following command to connect to the MongoDB server using the MongoDB Shell (mongosh). After the hostname and port, we specify a database name. We are going to call our database ch2:
$ mongosh mongodb://localhost:27017/ch2
The following are commands that can be runned directly fom the command line
# Inserting new field
> db.users.insertOne({ username: 'dan', fullName: 'Donak Kubo', age: 26 })
# Listing documnt
> db.users.find()
# Inserting more than one document
> db.users.insertMany([
  { username: 'jane', fullName: 'Jane Doe', age: 32 },
  { username: 'john', fullName: 'John Doe', age: 30 }
])
# Querying document
> db.users.findOne({ username: 'jane' })
> db.users.findOne({ _id: ObjectId('6405f062b0d06adeaeefc3bc')})
> db.users.find({ age: { $gt: 30 } }) - $gt means find users above 30 years
> db.users.find().sort({ age: 1 }) - sort in ascending order starting from one and -1 for decsending order
# Updating document
> db.users.updateOne({ username: 'dan' }, { $set: { age: 27 } })
> db.users.updateOne({ username: 'new' }, { $set: { fullName: 'New User' } })
# Deleting document
> db.users.deleteOne({ username: 'new' })
We can also connect to MongoDB using node.js as shown in the mongodbnode.js file
You can run by running the command node mongodbnode.js
