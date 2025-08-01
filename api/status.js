// api/status.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    status: "online",
    message: "Middleware IA Universal ativo em /api/status"
  });
});

module.exports = router;
