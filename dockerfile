FROM  node:21 as frontend

WORKDIR /app

ENV PORT 8080

COPY package.json ./

RUN npm install

COPY . /app

CMD [ "npm","dev" ]

EXPOSE 5173:8080