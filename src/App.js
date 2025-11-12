import React, { useState } from "react";

const suggestions = {
  wrok: "work",
  exampl: "example",
  teh: "the"
};

export default function SpellCheckApp() {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleChange = (e) => {
    const input = e.target.value;
    setText(input);

    // Check the last word typed
    const words = input.trim().split(" ");
    const lastWord = words[words.length - 1].toLowerCase();

    if (suggestions[lastWord]) {
      setSuggestion(`Did you mean: ${suggestions[lastWord]}?`);
    } else {
      setSuggestion("");
    }
  };

  return (
    <div>
      <textarea value={text} onChange={handleChange} placeholder="Type here..." />
      {suggestion && <p>{suggestion}</p>}
    </div>
  );
}