const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let posts = [];

// Health check
app.get("/", (req, res) => {
  res.send("Reely backend running");
});

// Get posts
app.get("/posts", (req, res) => {
  res.json(posts);
});

// Create post
app.post("/posts", (req, res) => {
  const newPost = {
    id: Date.now(),
    content: req.body.content,
    created_at: new Date().toISOString()
  };

  posts.unshift(newPost);
  res.json(newPost);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
