const express = require("express");
const router = express.Router();

const Medicine = require("../models/Medicine");
const Log = require("../models/Log"); // 🔥 must be here

// ➕ Add medicine
router.post("/add", async (req, res) => {
  try {
    const med = new Medicine(req.body);
    await med.save();
    res.json(med);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📋 Get medicines
router.get("/:userId", async (req, res) => {
  try {
    const meds = await Medicine.find({ userId: req.params.userId });
    res.json(meds);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🗑 Delete medicine + related logs
router.delete("/delete/:id", async (req, res) => {
  try {
    const medId = req.params.id;

    await Medicine.findByIdAndDelete(medId);
    await Log.deleteMany({ medicineId: medId });

    res.json({ message: "Deleted with logs" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;