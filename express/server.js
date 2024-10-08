const app = require("express")();
const PORT = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { test: "Hello world" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});

const userRouter = require("./routers/users");

app.use("/users", userRouter);

app.get("/test", (req, res) => {
  res.send(req.query);
});
