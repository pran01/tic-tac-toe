import { useState } from "react";
import "./App.css";
import Box from "./components/Box";
import WinStatus from "./components/WinStatus";

type User = {
  char: string;
  places: number[];
};

function App() {
  const [user1] = useState({ char: "X", places: [] as number[] });
  const [user2] = useState({ char: "O", places: [] as number[] });
  const [currentUser, setCurrentUser] = useState<User>(user1);
  const [fields, setFields] = useState(["", "", "", "", "", "", "", "", ""]);
  const [won, setWon] = useState(false);
  const [wonStatus, setWonStatus] = useState(false);
  const toggleUser = () => {
    if (currentUser === user1) setCurrentUser(user2);
    else setCurrentUser(user1);
  };
  const checkWinningCondition = (tempFields: string[], user: User) => {
    let conditions = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 5, 9],
      [3, 5, 7],
      [1, 5, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ];
    for (let condition of conditions) {
      let found = 0;
      for (let id of condition) {
        if (tempFields[id - 1] === user.char) found += 1;
      }
      if (found === 3) return true;
    }
    return false;
  };
  return (
    <div className="App">
      {wonStatus && (
        <WinStatus user={currentUser.char} setWonStatus={setWonStatus} />
      )}
      {won === false && <h1>Current Player: {currentUser.char}</h1>}
      <Box
        user={currentUser}
        checkWinningCondition={checkWinningCondition}
        toggleUser={toggleUser}
        fields={fields}
        setFields={setFields}
        won={won}
        setWon={setWon}
        setWonStatus={setWonStatus}
      />
    </div>
  );
}

export default App;
