const express = require("express");
const app = express();
const port = 3000;
const expressLayouts = require("express-ejs-layouts");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(expressLayouts);

app.get("/", (req, res) => {
  res.render("index", { user: "" });
});

app.get("/greet", (req, res) => {
  const name = req.body.name || "Guest";
  const timeOfDay = req.body.timeOfDay || "day";
  res.render("greet", { name, timeOfDay });
});

app.get("/users", (req, res) => {
  const users = ["Alice", "Bob", "Charlie", "David"];
  res.render("users", { users });
});

app.get("/greet", (req, res) => {
  const name = req.query.name || "Guest";
  const timeOfDay = req.query.time || "day";
  res.render("greet", { name, timeOfDay });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
