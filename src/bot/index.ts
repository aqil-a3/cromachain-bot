import { Telegraf } from "telegraf";
import { startCommand } from "./commands/start.js";
import { helpCommand } from "./commands/help.js";
import { env } from "../config/env.js";
import { connectCommand } from "./commands/connect.js";

export const bot = new Telegraf(env.BOT_TOKEN);

bot.start(startCommand);
bot.help(helpCommand);
bot.command("connect", connectCommand);
