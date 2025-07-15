const express = require("express");
const router = require("express").Router();

const News = require("../models/News");



// Create news
router.post("/", async (req, res) => {
  try {
    const news = new News(req.body);
    await news.save();
    res.json({ msg: "News created", news });
  } catch (err) {
    res.status(500).json({ msg: "Error creating news" });
  }
});

// Get all news
router.get("/", async (req, res) => {
  try {
    const allNews = await News.find().sort({ createdAt: -1 });
    res.json(allNews);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching news" });
  }
});

// Delete news
router.delete("/:id", async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);
    res.json({ msg: "News deleted" });
  } catch (err) {
    res.status(500).json({ msg: "Error deleting news" });
  }
});

module.exports = router;
