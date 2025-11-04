import express from "express";
import { bot } from "./bot/index.js";
import { env } from "./config/env.js";

const app = express();
app.use(express.json());

const WEBHOOK_PATH = `/bot${env.BOT_TOKEN}`;
app.use(WEBHOOK_PATH, bot.webhookCallback(WEBHOOK_PATH));

app.get("/", (_req, res) => res.json({ message: "Croma Bot is running on Vercel 🚀" }));
app.get("/health", (_req, res) => res.send("OK"));

export default app;
