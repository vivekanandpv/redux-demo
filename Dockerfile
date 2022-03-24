FROM nginx
COPY build /usr/share/nginx/html


#   to build: npm run dockerize
#   to run: docker container run --publish 9001:80 --name redux-demo-container --detach redux-demo:1.0.0
#   to check: http://localhost:9001
