install express:
npm install express

install nodmon: for realtime restart your server automatically
npm install nodemon
npm install --save-dev nodemon (For just the developer)

install sequelize:
npm install sequelize sequelize-cli

To create a server or API
const express = require('express')
const app = express()

app.listen(PORT, () => {
    put any operation here as you want. Mostly, we put a console log to initialize that the server is runn:
    console.log(`The server is started on port: ${PORT}`)
})