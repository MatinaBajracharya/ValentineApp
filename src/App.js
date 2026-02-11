import { useState } from "react";
import "./App.css";
import besos from "./assets/besos.gif";
import cute from "./assets/cute2.jpg";
import punch from "./assets/punch.gif";

function App() {
  // const [name, setName] = useState("");
  // const [noPosition, setNoPosition] = useState({ top: "50%", left: "55%" });
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);

  // const moveNoButton = () => {
  //   const top = Math.floor(Math.random() * 80) + "%";
  //   const left = Math.floor(Math.random() * 80) + "%";
  //   setNoPosition({ top, left });
  // };

  return (
    <div className="container">
      {!accepted && !rejected ? (
        <>
          <h1>💖 On the occassion of Valentine’s Day 💖</h1>

          {/* <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /> */}

          <h2> Salim, will you be my Valentine? 💌</h2>
          <img src={cute} alt="cute.png" style={{height:200, width:500}}/>

          <div className="buttons">
            <button className="yes" onClick={() => setAccepted(true)}>
              Yes 💘
            </button>

            {/* <button
              className="no"
              style={{ top: noPosition.top, left: noPosition.left }}
              onMouseEnter={moveNoButton}
            > */}
            <button className="no" onClick={() => setRejected(true)}>
              No 😜
            </button>
          </div>
        </>
      ) : accepted? (
        <>
          <h1>🎉 Yay! Happy Valentine’s Day 💕I Love You So Much!</h1>
          <img src={besos} alt="Besos gif" />
        </>
      ): (
        <>
          <h1>La kha 😡</h1>
          <img src={punch} alt="punch" />
        </>
      )}
    </div>
  );
}

export default App;
