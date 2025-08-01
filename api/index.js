const express = require("express");
const router = express.Router();

// Rota GET em /api/
router.get("/", (req, res) => {
  res.status(200).json({
    status: "Online",
    message: "Middleware IA Universal funcionando com sucesso!",
  });
});

module.exports = router;
