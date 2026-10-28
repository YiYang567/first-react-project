import { useState } from "react";

function ReadingGoal({ title, goal, onClose }) {
  const [pagesRead, setPagesRead] = useState(0);

  const handleRead = () => {
    setPagesRead(Math.min(pagesRead + 10, goal));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={onClose}>×</button>
      <h1>Reading goal</h1>
      <h2>{title}</h2>
      <p>Keep track of your reading progress.</p>
      <progress value={pagesRead} max={goal}></progress>
      <p>
        {pagesRead} / {goal} pages
      </p>
      <button onClick={handleRead} disabled={pagesRead >= goal}>
        Read 10 pages
      </button>
    </div>
  );
}

export default ReadingGoal;
