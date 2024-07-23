"use client";

import { useState } from "react";

const LikeDislike = () => {
  const [likes, setLikes] = useState(0);

  const handleButtonClick = (action) => {
    if (action === "like") {
      setLikes(likes + 1);
    } else if (action === "dislike" && likes > 0) {
      setLikes(likes - 1);
    } else if (action === "reset") {
      setLikes(0);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button
        onClick={() => handleButtonClick("like")}
        className="btn btn-like"
      >
        +
      </button>
      <span className="mx-4">{likes}</span>
      <button
        onClick={() => handleButtonClick("dislike")}
        disabled={likes === 0}
        className="btn btn-dislike"
      >
        -
      </button>
      <br />
      <button
        onClick={() => handleButtonClick("reset")}
        disabled={likes === 0}
        className="btn btn-reset"
      >
        Reset!
      </button>
    </div>
  );
};

export default LikeDislike;
