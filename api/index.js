// api/index.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    status: "Online",
    message: "Middleware IA Universal funcionando com sucesso!"
  });
});

router.use("/status", require("./status"));

module.exports = router;
