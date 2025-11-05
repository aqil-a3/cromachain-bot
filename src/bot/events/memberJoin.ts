import { Context, Markup } from "telegraf";
import { Message } from "telegraf/types";

export async function handleMemberJoin(ctx: Context) {
  const message = ctx.message as Message.NewChatMembersMessage | undefined;

  const newMembers = message?.new_chat_members;
  if (!newMembers) return;

  for (const member of newMembers) {
    const name = member.first_name || member.username || "there";

    const welcomeText = `
👋 Welcome, \*${name}\\!*

You're now part of the *Croma community* 🚀  
Explore and connect with our ecosystem through the links below:
`;

    const buttons = Markup.inlineKeyboard([
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
    ]);

    try {
      const sentMessage = await ctx.replyWithMarkdownV2(welcomeText, buttons);

      // 🕒 Auto delete setelah 2 menit
      setTimeout(async () => {
        try {
          await ctx.deleteMessage(sentMessage.message_id);
        } catch (err) {
          console.warn("⚠️ Gagal hapus pesan welcome:", (err as Error).message);
        }
      }, 120000);
    } catch (err) {
      console.error("❌ Gagal kirim pesan welcome:", err);
    }
  }
}
