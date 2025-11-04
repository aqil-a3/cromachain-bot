import express from "express";
import { bot } from "../bot";
import { env } from "../config/env";

export function startServer() {
  // hanya jalankan Express kalau sedang development
  if (process.env.NODE_ENV !== "production") {
    const app = express();
    const WEBHOOK_PATH = `/bot${env.BOT_TOKEN}`;
    const WEBHOOK_URL = `${env.NGROK_URL}${WEBHOOK_PATH}`;

    app.use(bot.webhookCallback(WEBHOOK_PATH));
    bot.telegram.setWebhook(WEBHOOK_URL);

    app.listen(env.PORT, () => {
      console.log(`✅ Dev server running at http://localhost:${env.PORT}`);
      console.log(`🌐 Webhook registered at ${WEBHOOK_URL}`);
    });
  } else {
    const app = express();

    app.get("/", (req, res) => {
      res.json({ message: "Hello from Express on Vercel!" });
    });

    console.log(
      "🛰️ Production mode detected – Express not started (handled by Vercel)."
    );
  }
}
