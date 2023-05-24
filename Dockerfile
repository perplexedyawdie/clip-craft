# Use the official Node.js 14 image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

RUN apt-get update -y

RUN npm install yarn -g

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

COPY yarn.lock ./

# Install app dependencies
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js app
RUN yarn build

# Set the command to run your Next.js app using npm
CMD ["yarn", "start"]
