# Use a Node.js base image
FROM node:18.18.2

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies with the --legacy-peer-deps flag
RUN npm install --legacy-peer-deps

# Install necessary libraries
RUN npm install nodemailer
RUN npm install validator

# Install strapi-utils
RUN npm install strapi-utils

# Copy the rest of the files to the working directory
COPY . .

# Run the npm run build command - copy the template.html file to the dist folder
RUN npm run build

# Expose port 1337 (default Strapi port)
EXPOSE 1337

# Command to start the Strapi server
CMD ["npm", "run", "develop"]
