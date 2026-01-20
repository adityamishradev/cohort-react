const express = require("express");
const Item = require("../models/Item");

const router = express.Router();

/* ADD ITEM */
router.post("/add", async (req, res) => {
  const item = await Item.create(req.body);
  res.json(item);
});

/* SEARCH ITEM */
router.get("/search", async (req, res) => {
  const { q } = req.query;

  const items = await Item.find({
    name: { $regex: q, $options: "i" }
  });

  res.json(items);
});

module.exports = router;
