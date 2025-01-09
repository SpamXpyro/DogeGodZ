
const express = require('express');
const webSocket = require('ws');
const http = require('http');
const telegramBot = require('node-telegram-bot-api');
const uuid4 = require('uuid');
const multer = require('multer');
const bodyParser = require('body-parser');
const axios = require("axios");

const token = 'YOUR_BOT_TOKEN'; // Replace with your bot token
const id = 'YOUR_TELEGRAM_ID'; // Replace with your Telegram user ID

const app = express();
const appServer = http.createServer(app);
const appSocket = new webSocket.Server({ server: appServer });
const appClients = new Map();

const upload = multer();
app.use(bodyParser.json());

// Temporary bot instance for webhook removal
const tempBot = new telegramBot(token, { polling: false });

tempBot.deleteWebhook().then(() => {
    console.log("Webhook removed. Switching to polling mode.");
    
    // Initialize bot in polling mode after webhook removal
    const appBot = new telegramBot(token, { polling: true });

    // Bot logic goes here
    let currentUuid = '';
    let currentNumber = '';
    let currentTitle = '';

    app.get('/', function (req, res) {
        res.send('<h1 align="center">𝙎𝙚𝙧𝙫𝙚𝙧 𝙪𝙥𝙡𝙤𝙖𝙙𝙚𝙙 𝙨𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮</h1>');
    });

    // Existing bot functionalities remain unchanged...

}).catch(err => {
    console.error("Error deleting webhook:", err.message);
});

// Start the server
appServer.listen(3000, () => {
    console.log("Server is running on port 3000");
});
