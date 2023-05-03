const router = require("express").Router();
const Bread = require("../models/bread");

//GET all the bread
router.get("/", (req, res) => {
  res.render("index", {
    breads: Bread,
  });
});

//GET bread by index (specific bread)
router.get("/new", (req, res) => {
  res.render("new");
});

router.get("/:index", (req, res) => {
  const { index } = req.params;
  res.render("show", {
    bread: Bread[index],
  });
});

router.post("/", (req, res) => {
  if (!req.body.image)
    req.body.image =
      "https://img.freepik.com/premium-vector/cute-funny-bread-toast-character_92289-2249.jpg";
  if (req.body.hasGluten === "on") {
    req.body.hasGluten = true;
  } else {
    req.body.hasGluten = false;
  }
  Bread.push(req.body);
  res.redirect("/breads");
});

module.exports = router;
