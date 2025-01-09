
const TelegramBot = require('node-telegram-bot-api');
const http = require('http');

// Replace with your Telegram bot token
const token = 'YOUR_BOT_TOKEN';
const bot = new TelegramBot(token, { polling: true }); // Use polling, or if you're using webhooks, switch to webhooks

// Example command to check if the bot is working
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Hello, welcome to DogeGodZ!');
});

// If you are using webhooks, use this setup instead of polling
// const webhookUrl = 'https://yourapp.com/path';
