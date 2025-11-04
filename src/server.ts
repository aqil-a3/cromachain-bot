import express from "express";
import { bot } from "../bot";
import { env } from "../config/env";

const app = express();

// enable JSON body
app.use(express.json());

// webhook endpoint
const WEBHOOK_PATH = `/bot${env.BOT_TOKEN}`;
app.use(WEBHOOK_PATH, bot.webhookCallback(WEBHOOK_PATH));

// base route
app.get("/", (_, res) => {
  res.json({ message: "Croma Bot is running on Vercel 🚀" });
});

// optional: simple health check
app.get("/health", (_, res) => res.send("OK"));

export default app;
