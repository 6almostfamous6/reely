import { useState } from "react";
import axios from "axios";

const API_URL = "reely-production.up.railway.app";

export default function CreatePost() {
  const [text, setText] = useState("");

  const submitPost = async () => {
    if (!text.trim()) return;

    await axios.post(`${API_URL}/posts`, {
      author: "Guest",
      content: text,
    });

    setText("");
    window.location.reload();
  };

  return (
    <div className="create-post">
      <textarea
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={submitPost}>Post</button>
    </div>
  );
}


