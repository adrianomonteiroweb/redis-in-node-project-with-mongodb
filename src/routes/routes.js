const router = require("express").Router();

router.get("/", (_req, res) => {
  res.send("ok");
});

module.exports = router;
