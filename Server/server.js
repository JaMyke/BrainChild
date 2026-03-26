const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("BrainChild API is running");
});

app.post("/submit", (req, res) => {
  const idea = req.body.ideaText;

  console.log("Received idea:", idea);

  res.send("Idea received successfully");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});