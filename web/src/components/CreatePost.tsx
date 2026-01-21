import { useState } from "react";

type CreatePostProps = {
  backendUrl: string;
  onPostCreated: () => void;
};

export default function CreatePost({
  backendUrl,
  onPostCreated
}: CreatePostProps) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const submitPost = async () => {
    if (!content.trim()) return;

    setLoading(true);

    try {
      await fetch(`${backendUrl}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ content })
      });

      setContent("");
      onPostCreated(); // refresh feed
    } catch (err) {
      console.error("Failed to create post:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-post">
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button onClick={submitPost} disabled={loading}>
        {loading ? "Posting..." : "Post"}
      </button>
    </div>
  );
}


