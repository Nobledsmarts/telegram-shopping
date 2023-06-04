import * as dotenv from "dotenv";
import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';

dotenv.config();


const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply('Welcome 👍', {
    text : "web app"
}));
// bot.help((ctx) => ctx.reply('Send me a sticker'));
// bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
// bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();

// console.log("working")