import { Context, Markup } from "telegraf";
import { escapeMarkdownV2 } from "../../helper/escapeMarkdownV2";

export function helpCommand(ctx: Context) {
  const message = `🧭 *Croma Bot Help Menu*

Here are the available commands:

• /start — Restart the bot and show the main menu  
• /connect — Connect your Croma account  
• /help — Show this help message again  

If you need further assistance, please contact the support team.`;

  return ctx.replyWithMarkdownV2(
    escapeMarkdownV2(message),
    Markup.keyboard([
      ["/connect", "/start"]
    ])
      .resize()
      .oneTime()
  );
}
