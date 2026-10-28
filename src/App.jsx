import { useState } from "react";
import ReadingGoal from "./ReadingGoal";

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      {visible ? (
        <ReadingGoal
          title="Learn React with TypeScript"
          goal={50}
          onClose={() => setVisible(false)}
        />
      ) : (
        <button onClick={() => setVisible(ture)}>show reading goal</button>
      )}
    </div>
  );
}

export default App;
