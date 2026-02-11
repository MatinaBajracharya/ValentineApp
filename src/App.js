import { useState } from "react";
import "./App.css";

function App() {
  // const [name, setName] = useState("");
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
          <h1>💖 On the occassion of Valentine’s Day 💖</h1>

          {/* <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /> */}

          <h2> Salim, will you be my Valentine? 💌</h2>
          <img src="cute.png" alt="cute.png" />

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
        <>
          <h1>🎉 Yay! Happy Valentine’s Day 💕I Love You So Much!</h1>
          <img src="/besos.gif" alt="Besos gif" />
        </>
      )}
    </div>
  );
}

export default App;
