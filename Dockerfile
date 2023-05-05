# pull the base image
FROM node:16-alpine

# set the working direction
WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

# install app dependencies
RUN npm install


# add app
COPY . ./

EXPOSE 3000

# # start app
CMD ["npm", "start"]
