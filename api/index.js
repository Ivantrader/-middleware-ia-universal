// /api/index.js
export default function handler(req, res) {
  res.status(200).json({
    status: "ok",
    message: "Middleware IA Universal online",
    timestamp: new Date().toISOString(),
    docs: "https://github.com/Ivantrader/-middleware-ia-universal"
  });
}
