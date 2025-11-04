import { Telegraf } from "telegraf";
import { startCommand } from "./commands/start";
import { helpCommand } from "./commands/help";
import { env } from "../config/env";
import { connectCommand } from "./commands/connect";

export const bot = new Telegraf(env.BOT_TOKEN);

bot.start(startCommand);
bot.help(helpCommand);
bot.command("connect", connectCommand);
