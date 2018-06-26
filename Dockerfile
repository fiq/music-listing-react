FROM node:6-alpine
WORKDIR /opt/artist-app
COPY . .
RUN npm install
EXPOSE 8080
CMD ["npm", "start"]
