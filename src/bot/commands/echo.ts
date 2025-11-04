import { Context } from "telegraf";

export function echoCommand(ctx: Context) {
  if (ctx.message && "text" in ctx.message) {
    ctx.reply(`Kamu bilang: ${ctx.message.text}`);
  }
}
