import { NextResponse } from "next/server";
import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";

// const { Telegraf } = require('telegraf');
// const { message } = require('telegraf/filters');
require('dotenv').config();

export function GET(request){

    try {
        const { BOT_TOKEN, APP_URL } = process.env;
        const bot = new Telegraf(BOT_TOKEN);
        // bot.hears('/tester', (ctx) => ctx.reply("Hello there"));
        // bot.hears('/test', (ctx) => ctx.reply("Hello there"));
    
    
        bot.command('login', (ctx) => ctx.reply("Hello there from command"));
    
        // bot.on(message('text'), )
        // bot.hears('/test', (ctx) => ctx.reply("Hello there"));
        bot.start((ctx) => ctx.reply('Welcome to Telegram Shopping', {
          reply_markup: {
            keyboard: [[{
                text : "Open Telegram Shopping", web_app : {
                    url : APP_URL
                }
            }]]
          }
        }));
        
        bot.on(message('text'), async (ctx) => {
            ctx.reply(ctx.update.message.text);
        },);
          
        // bot.help((ctx) => ctx.reply('Send me a sticker'));
        bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
        // bot.hears('hi', (ctx) => ctx.reply('Hey there'));
        bot.launch();
    
        process.once('SIGINT', () => bot.stop('SIGINT'));
        process.once('SIGTERM', () => bot.stop('SIGTERM'));

        return new NextResponse('bot connected');
    } catch (err){
        console.log(err);
        console.log('error connecting to bot: ', err.message);
    }
}