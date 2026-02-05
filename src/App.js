import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [noPosition, setNoPosition] = useState({ top: "50%", left: "55%" });
  const [accepted, setAccepted] = useState(false);

  const moveNoButton = () => {
    const top = Math.floor(Math.random() * 80) + "%";
    const left = Math.floor(Math.random() * 80) + "%";
    setNoPosition({ top, left });
  };

  return (
    <div className="container">
      {!accepted ? (
        <>
          <h1>💖 Valentine Day 💖</h1>

          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {name && (
            <h2>{name}, will you be my Valentine? 💌</h2>
          )}

          <div className="buttons">
            <button className="yes" onClick={() => setAccepted(true)}>
              Yes 💘
            </button>

            <button
              className="no"
              style={{ top: noPosition.top, left: noPosition.left }}
              onMouseEnter={moveNoButton}
            >
              No 😜
            </button>
          </div>
        </>
      ) : (
        <h1>🎉 Yay! Happy Valentine’s Day 💕I Love You So Much {name}!</h1>
      )}
    </div>
  );
}

export default App;
