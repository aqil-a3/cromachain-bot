import { Context, Markup } from "telegraf";
import { escapeMarkdownV2 } from "../../helper/escapeMarkdownV2.js";
import path from "path";

export async function startCommand(ctx: Context) {
  const firstName = ctx.from?.first_name || "there";

  // escape semua bagian teks kecuali yang ingin diformat
  const escapedName = escapeMarkdownV2(firstName);
  const imagePath = path.join(process.cwd(), "public", "images", "main-banner.png");

  // buat pesan aman untuk MarkdownV2
  const message =
    `👋 Hello, ${escapedName}\\!\n\n` +
    `Welcome to the ` +
    `\*Croma Bot*` + // manual injection: tampil bold sesuai aturan MarkdownV2
    ` — your assistant for everything related to the Croma ecosystem\\.\n\n` +
    `You can start by connecting your account using the buttons below\\.`;

  await ctx.replyWithPhoto({ source: imagePath }, { caption: "🌐 Welcome to Croma!" });

  return ctx.replyWithMarkdownV2(
    message,
    Markup.keyboard([["/connect", "/help"]])
      .resize()
      .oneTime()
  );
}
