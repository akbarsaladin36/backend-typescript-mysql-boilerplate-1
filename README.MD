<h1 align="center">Express - Backend Boilerplate with Typescript & MySQL</h1>

This API is created by me to make backend job more easier. With this boilerplate, you can free to use, change, and add any request that you need for your backend website. This API use Express as Nodejs framework, Typescript, and MySQL as store database. [More about Express](https://en.wikipedia.org/wiki/Express.js)

## Built With

[![Express.js](https://img.shields.io/badge/Express.js-5.x-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Typescript](https://img.shields.io/badge/Typescript.js-5.x-blue.svg?style=rounded-square)](https://www.typescriptlang.org/docs/)
[![Node.js](https://img.shields.io/badge/Node.js-v.23.x-green.svg?style=rounded-square)](https://nodejs.org/)


## Requirements

1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. Node_modules
3. Typescript
4. <a href="https://www.getpostman.com/">Postman</a>
5. Web Server (ex. localhost)

## How to run the app ?

1. Open app's directory in CMD or Terminal
2. Type `npm install`
3. Make new file a called **.env**, set up first [here](#set-up-env-file)
4. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
5. Create a database with the name #nama_database, and Import file sql to **phpmyadmin**
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.(ex. localhost:3000/)
8. You can see all the end point [here](https://documenter.getpostman.com/view/14780095/2sB2qgedtb)
9. Type `npm run dev` to activated the server.

## Set up .env file

Open .env file on your favorite code editor, and copy paste this code below :

```
SERVER_PORT = <YOUR SERVER PORT>
DB_HOST= <YOUR DATABASE HOST>
DB_USER= <YOUR DATABASE USERNAME>
DB_PASSWORD= <YOUR DATABASE PASSWORD>
DB_DATABASE= <YOUR DATABASE NAME>
JWT_SECRETKEY = <YOUR JWT SECRET KEY>
JWT_EXPIRESTIME = <YOUR JWT EXPIRE TIME>
```

## Feature

1. Login and Register API
1. Protected CRUD Users API

## License

© [Muhammad Akbar Saladin Siregar](https://github.com/akbarsaladin36/)
