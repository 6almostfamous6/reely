import { useState } from "react";

const BACKEND_URL = "https://YOUR-RAILWAY-URL";

export default function CreatePost() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!text.trim()) return;

    setLoading(true);

    await fetch(`${BACKEND_URL}/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: text })
    });

    setText("");
    setLoading(false);

    // 🔥 THIS IS WHY NOTHING UPDATES
    window.location.reload();
  };

  return (
    <div className="create-post">
      <textarea
        placeholder="What are you watching?"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={submit} disabled={loading}>
        Post
      </button>
    </div>
  );
}
