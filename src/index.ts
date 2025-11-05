import express from "express";
import { bot } from "./bot/index.js";
import { env } from "./config/env.js";

const app = express();
app.use(express.json());

// app.listen(3000, () => console.log("Dev Server is Running"));

const WEBHOOK_PATH = `/bot${env.BOT_TOKEN}`;
// const WEBHOOK_PATH = `/bot${process.env.ENV_BOTH_TOKEN}`;
app.use(WEBHOOK_PATH, bot.webhookCallback(WEBHOOK_PATH));

app.get("/", (_req, res) =>
  res.json({ message: "Croma Bot is running on Vercel 🚀" })
);
app.get("/health", (_req, res) => res.send("OK"));

app.post("/api/telegram", async (req, res) => {
  try {
    await bot.handleUpdate(req.body);
    res.status(200).send("OK");
  } catch (error) {
    console.error("❌ Error handling Telegram update:", error);
    res.status(500).send("Error");
  }
});

app.get("/api/telegram", (_req, res) => {
  res.json({ message: "Croma Bot webhook endpoint" });
});

export default app;
