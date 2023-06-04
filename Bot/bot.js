const { Telegraf } = require('telegraf');
// const { message } = require('telegraf/filters');
require('dotenv').config();

try {
    const { BOT_TOKEN, APP_URL } = process.env;
    const bot = new Telegraf(BOT_TOKEN);
    bot.command('test', (ctx) => ctx.reply("Hello there"));
    bot.command('/test', (ctx) => ctx.reply("Hello there 2"));


    bot.start((ctx) => ctx.reply('Welcome 👍', {
      reply_markup: {
        keyboard: [[{
            text : "Open Telegram Shopping", web_app : {
                url : APP_URL
            }
        }]]
      }
    }));
    // bot.help((ctx) => ctx.reply('Send me a sticker'));
    // bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
    // bot.hears('hi', (ctx) => ctx.reply('Hey there'));
    bot.launch();
} catch (err){
    console.log('error connecting to bot');
}

console.log("hello from bot")