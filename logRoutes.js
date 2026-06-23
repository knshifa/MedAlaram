const express = require("express");
const router = express.Router();
const Log = require("../models/Log");

// Mark taken/missed
router.post("/mark", async (req, res) => {
  try {
    const log = new Log(req.body);
    await log.save();
    res.json(log);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get history
router.get("/:userId", async (req, res) => {
  try {
    const logs = await Log.find({ userId: req.params.userId });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;