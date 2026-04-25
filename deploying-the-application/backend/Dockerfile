FROM node:20

#where all files in directory will be placed
WORKDIR /app

#copy them to our working directory
COPY package.json package-lock.json ./
RUN npm install

#we copy the rest of our application to docker image
COPY . .

# we run the application
CMD ["npm", "start"]