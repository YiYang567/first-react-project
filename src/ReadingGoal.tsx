import { useState } from "react";

function ReadingGoal({ title, goal, currentPage, onRead, onClose }) {
  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={onClose}>×</button>
      <h1>Reading goal</h1>
      <h2>{title}</h2>
      <p>Keep track of your reading progress.</p>
      <progress value={currentPage} max={goal}></progress>
      <p>
        {currentPage} / {goal} pages
      </p>
      <button onClick={onRead} disabled={currentPage >= goal}>
        Read 10 pages
      </button>
    </div>
  );
}

export default ReadingGoal;
