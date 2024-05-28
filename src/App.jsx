import { useReducer, useState } from "react";
import Box from "./components/Box";
import Boxes from "./components/Boxes";
import "./App.css";
import PlayerStatus from "./components/PlayerStatus";
import checkWin from "./lib/checkWin";
import checkIfFull from "./lib/checkIfFull";

function reducer(state, action) {
  switch (action.type) {
    case "box/click": {
      const { row, column } = action.payload;

      if (state.gridBoard[row][column] !== undefined) return { ...state };

      const newGridBoard = [...state.gridBoard];
      newGridBoard[row][column] = state.activePlayer === 0 ? "X" : "O";

      const [winnerSymbol, winningPattern] = checkWin(newGridBoard);

      if (winnerSymbol === "X" || winnerSymbol === "O") {
        return {
          ...state,
          winner: winnerSymbol === "X" ? 0 : 1,
        };
      }
      if (checkIfFull(newGridBoard)) return { ...state, winner: 2 };

      return {
        ...state,
        gridBoard: newGridBoard,
        activePlayer: state.activePlayer === 0 ? 1 : 0,
      };
    }
  }
}

const initialState = {
  activePlayer: 0,
  gridBoard: [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
  ],
  winner: null,
};

function App() {
  const [{ gridBoard, activePlayer, winner }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const [winnerSymbol, winningPattern] = checkWin(gridBoard);

  return (
    <div className="app">
      <PlayerStatus activePlayer={activePlayer} />
      <Boxes>
        {gridBoard.map((row, i) => {
          return row.map((column, j) => (
            <Box
              key={j}
              coords={{ row: i, column: j }}
              column={column}
              dispatch={dispatch}
              winner={winner}
              winningPattern={winningPattern}
            />
          ));
        })}
      </Boxes>
    </div>
  );
}

export default App;
