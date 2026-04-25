FROM node:20 AS build

#defining environment variable that are relevant during the building of project
ARG VITE_BACKEND_URL=http://localhost:3001/api/v1

WORKDIR /build
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

#We use the FROM instruction again to create the final stage. This time, we base it off the nginx image, which runs an nginx web server:
FROM nginx AS final

#We set the working directory for this stage to /var/www/html, which is the folder that nginx serves static files from:
WORKDIR /usr/share/nginx/html

#Lastly, we copy everything from the /build/dist folder (which is where Vite puts the built static files) from the build stage into the final stage:
COPY --from=build /build/dist .