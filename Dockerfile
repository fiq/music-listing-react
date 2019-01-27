FROM node:6-alpine
WORKDIR /opt/artist-app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
