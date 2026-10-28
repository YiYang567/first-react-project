import { useState } from "react";
import ReadingGoal from "./ReadingGoal";

function App() {
  const goal = 50;
  const [currentpage, setCurrentPage] = useState(0);
  const [visible, setVisible] = useState(true);
  const handleRead = () => {
    setCurrentPage(Math.min(currentpage + 10, goal));
  };
  const handleClose = () => {
    setVisible(false);
  };

  const handleShow = () => {
    setVisible(true);
  };

  return (
    <div>
      {visible ? (
        <ReadingGoal
          title="Learn React with TypeScript"
          goal={goal}
          currentPage={currentpage}
          onRead={handleRead}
          onClose={handleClose}
        />
      ) : (
        <button onClick={handleShow}>Show reading goal</button>
      )}
    </div>
  );
}

export default App;
