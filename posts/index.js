const express = require("express");
const cors = require("cors");
const { randomBytes } = require("crypto");

const posts = {};

const app = express();

app.use(cors());

app.use(express.json());

app.get("/api/v1/posts", (req, res) => {
  res.send(posts);
});

app.post("/api/v1/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = { id, title };
  res.status(201).send(posts[id]);
});

app.listen(4000, () =>
  console.log("Post service is running on port http://localhost:4000")
);
