function Box({ dispatch, coords, column, winner, winningPattern }) {
  const { row, column: col } = coords;

  const isPartOfWinningPattern =
    winningPattern && winningPattern.some(([r, c]) => r === row && c === col);

  const handleClick = () => {
    if (winner !== null || column !== undefined) return;
    dispatch({ type: "box/click", payload: coords });
  };

  return (
    <div
      className={`box${column === "X" ? " x" : ""}${
        column === "O" ? " o" : ""
      }`}
      onClick={handleClick}
      aria-disabled={winner !== null || winner === 2 ? true : false}
      style={{
        backgroundColor: isPartOfWinningPattern ? "green" : "",
      }}
    />
  );
}

export default Box;
