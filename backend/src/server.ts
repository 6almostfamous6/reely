import express from "express";

const app = express();
app.use(express.json());

type Post = {
  id: number;
  author: string;
  content: string;
};

let posts: Post[] = [];

app.get("/", (req, res) => {
  res.send("Reely backend running");
});

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/posts", (req, res) => {
  const { author, content } = req.body;

  if (!content) {
    return res.status(400).json({ error: "Content required" });
  }

  const newPost = {
    id: Date.now(),
    author: author || "Guest",
    content,
  };

  posts.unshift(newPost);
  res.status(201).json(newPost);
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
