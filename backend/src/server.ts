import express from "express";
import cors from "cors";
import postsRoutes from "./posts/posts.routes";
import roomsRoutes from "./rooms/rooms.routes";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/rooms", roomsRoutes);
app.use("/posts", postsRoutes);

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

// 🚨 THIS IS CRITICAL FOR RAILWAY
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
