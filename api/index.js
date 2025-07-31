const express = require("express");
const router = express.Router();

router.use("/openrouter", require("./openrouter"));
router.use("/gemini", require("./gemini"));
router.use("/huggingface", require("./huggingface"));

module.exports = router;
