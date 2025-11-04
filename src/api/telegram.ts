import { VercelRequest, VercelResponse } from "@vercel/node";
import { bot } from "../bot";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "POST") {
    try {
      await bot.handleUpdate(req.body);
      res.status(200).send("OK");
    } catch (error) {
      console.error("Error handling update:", error);
      res.status(500).send("Error");
    }
  } else {
    res.status(200).send("Croma Bot is running!");
  }
}
