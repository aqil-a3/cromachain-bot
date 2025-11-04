import { Context, Markup } from "telegraf";
import { escapeMarkdownV2 } from "../../helper/escapeMarkdownV2.js";

export function connectCommand(ctx: Context) {
  const message = `🔗 Connect with Croma

Choose a platform or link below to explore more about the Croma ecosystem:`;

  return ctx.replyWithMarkdownV2(
    escapeMarkdownV2(message),
    Markup.inlineKeyboard([
      [
        Markup.button.url("CromaArt", "https://cromaart.io"),
        Markup.button.url("CromaChain", "https://cromachain.com"),
      ],
      [
        Markup.button.url("TrixWallet", "https://trixwallet.com"),
        Markup.button.url("TrixNews", "https://trixnews.com"),
      ],
      [
        Markup.button.url(
          "Whitepaper",
          "https://drive.google.com/file/d/19wgAl2GpnZ_lgZW6ix2CUSMrlG0c_WHk/view?usp=drivesdk"
        ),
        Markup.button.url(
          "Pitch Deck",
          "https://drive.google.com/file/d/1-EHi9T3atd5XZ-9a4xzmvw-8zsaCPNB6/view?usp=drivesdk"
        ),
      ],
      [Markup.button.url("Buy $CRM", "https://presale.cromachain.com")],
      [
        Markup.button.url("X (Twitter)", "https://x.com/cromachain"),
        Markup.button.url("Discord", "https://discord.com/invite/SWj8TWfu9k"),
      ],
      [
        Markup.button.callback("📱 Play Store (Coming Soon)", "coming_soon"),
        Markup.button.callback("🍎 App Store (Coming Soon)", "coming_soon"),
      ],
    ])
  );
}
