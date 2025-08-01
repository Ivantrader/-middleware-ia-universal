export default function handler(req, res) {
  res.status(200).json({
    status: "online",
    message: "Middleware IA Universal ativo em /api/status"
  });
}
