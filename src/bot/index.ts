import { Telegraf } from "telegraf";
import { startCommand } from "./commands/start.js";
import { helpCommand } from "./commands/help.js";
import { env } from "../config/env.js";
import { connectCommand } from "./commands/connect.js";
import { handleMemberJoin } from "./events/memberJoin.js";

export const bot = new Telegraf(env.BOT_TOKEN);
// export const bot = new Telegraf(env.ENV_BOT_TOKEN);

bot.start(startCommand);
bot.help(helpCommand);
bot.command("connect", connectCommand);

bot.on("new_chat_members", handleMemberJoin);