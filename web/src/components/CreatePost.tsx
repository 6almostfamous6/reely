import { useState } from "react";
import axios from "axios";

export default function CreatePost() {
  const [text, setText] = useState("");

  const handlePost = () => {
    axios
      .post("https://your-backend-url.up.railway.app/posts", { content: text })
      .then(() => {
        setText(""); // clear input
        window.location.reload(); // simple refresh to update feed
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="create-post">
      <textarea
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button disabled={!text.trim()} onClick={handlePost}>
        Post
      </button>
    </div>
  );
}

