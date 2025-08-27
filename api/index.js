import app from "../server.js";

// Export handler for Vercel
export default function handler(req, res) {
  app(req, res);
}
