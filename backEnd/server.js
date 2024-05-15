import express from "express";
const port = 8080;
const localhost = "127.0.0.1";

const app = express();
app.get("/login", (req, res) => {});
app.post("/login", (req, res) => {});
app.get("/register", (req, res) => {});
app.post("/register", (req, res) => {});

app.listen(port, () => {
  console.log(`server is running on ${localhost}:${port}`);
});
