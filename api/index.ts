import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async (req: VercelRequest, res: VercelResponse) => {
  res.redirect("https://discord.gg/gXcrfxSurk");
};
