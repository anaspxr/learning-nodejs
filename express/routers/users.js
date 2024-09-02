const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.send("user new form");
});

router.post("/", (req, res) => {
  res.send("create user");
});

router.get("/:id", (req, res) => {
  res.send(`User get id:${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`User delete  id:${req.params.id}`);
});
module.exports = router;
