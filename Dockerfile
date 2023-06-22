# Stage 1: Build the application
FROM node:16-alpine3.14 as build
WORKDIR /nolan-seokane-frontend/
COPY package.json ./
RUN yarn install --frozen-lockfile
COPY . ./
RUN yarn build --configuration=production

# Stage 2: Create the final image
FROM node:16-alpine3.14
WORKDIR /nolan-seokane-frontend/
COPY --from=build /nolan-seokane-frontend/dist ./dist
COPY package.json .
COPY server.js .
RUN yarn install --frozen-lockfile --production && \
	yarn add express compression
CMD [ "yarn", "start:prod" ]
