import React from "react";

import jerry from "../jerry.png";
import gatsby from "../gatsby.jpg";
import "../stylesStar.css";

const PlayAgain = ({ gameStatus, onClick }) => {
  return (
    <div
      className="message"
      style={{ color: gameStatus === "lost" ? "red" : "green" }}
    >
      {gameStatus === "lost" ? (
        <div>
          <h3> "Game Over"</h3>
          <img src={jerry} alt="jerry" />
        </div>
      ) : (
        <div>
          <h3>Nice you are a Proo!</h3>
          <img className="gatsby" src={gatsby} alt="jerry" />
        </div>
      )}
      <button className="play-again" onClick={onClick}>
        Play again!
      </button>
    </div>
  );
};

export default PlayAgain;
