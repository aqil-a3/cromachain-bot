import express from "express";
import { bot } from "../bot";
import { env } from "../config/env";

const app = express();

const WEBHOOK_PATH = `/bot${env.BOT_TOKEN}`;

app.use(express.json());
app.use(bot.webhookCallback(WEBHOOK_PATH));

app.get("/", (_, res) => {
  res.json({ message: "Croma Bot is running on Vercel 🚀" });
});

export default app;
