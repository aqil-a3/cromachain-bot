import dotenv from "dotenv";
dotenv.config();

if (!process.env.BOT_TOKEN) {
  console.error("❌ BOT_TOKEN tidak ditemukan di .env");
  process.exit(1);
}

export const env = {
  BOT_TOKEN: process.env.BOT_TOKEN!,
  NGROK_URL: process.env.NGROK_URL!,
  PORT: Number(process.env.PORT) || 3000,
};
