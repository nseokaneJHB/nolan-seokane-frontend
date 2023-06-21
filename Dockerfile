FROM node:14.11.0-alpine3.10

WORKDIR /usr/src/app/

COPY . .

RUN yarn global add @angular/cli@16.1.0

RUN yarn
RUN ng version
RUN yarn build:prod

EXPOSE $PORT

CMD [ "yarn", "start:prod" ]