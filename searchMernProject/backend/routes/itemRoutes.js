const express = require("express");
const Item = require("../models/Item");

const router = express.Router();

/* ================= ADD ITEM ================= */

// POST request jab naya item add karna ho
router.post("/add", async (req, res) => {

  // req.body se data aata hai
  // example:
  // { name: "Phone", category: "Electronics" }

  const item = await Item.create(req.body);

  // response me added item bhej diya
  res.json(item);
});

/* ================= SEARCH ITEM ================= */

router.get("/search", async (req, res) => {

  // URL se query nikal rahe hain
  // /search?q=ph
  const { q } = req.query;

  // MongoDB me search
  const items = await Item.find({

    /*
      name field me search hoga
      $regex = partial search
      q = jo user ne type kiya
      "i" = case insensitive
    Jo word tum likho (q), usko name me dhundo — capital ya small letter ki tension mat lo
    */

    name: { $regex: q, $options: "i" }
  });

  // matching items frontend ko bhej do
  res.json(items);
});

module.exports = router;
