const express = require("express");
const router = express.Router();
const Article = require("../models/Article");
// GET all articles
router.get("/", async (req, res) => {
  try {
    const articles = await Article.find();
    res.send(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET article by name
router.get("/:name", async (req, res) => {
  try {
    const article = await Article.findOne({ name: req.params.name });
    res.send(article);
  } catch (err) {
    res.status(404).json({ error: "Article not found" });
  }
});

// Increment upvotes of an article by name
router.put("/:name/upvotes", async (req, res) => {
  try {
    const article = await Article.findOneAndUpdate(
      { name: req.params.name },
      { $inc: { upvotes: 1 } },
      { new: true } // To get the updated article
    );
    res.send(article);
  } catch (err) {
    res.status(404).json({ error: "Article not found" });
  }
});

module.exports = router;
