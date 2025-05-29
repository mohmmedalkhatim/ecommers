FROM  node:21 as frontend

WORKDIR /app

RUN apt-get install node

ENV PORT=8080

COPY package.json ./

RUN npm install

COPY . .

CMD [ "npm","host" ]

EXPOSE 5173:8080