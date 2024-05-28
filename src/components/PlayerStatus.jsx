function PlayerStatus({ activePlayer }) {
  return (
    <div className="playersContainer">
      <div className={`player1${activePlayer === 0 ? " active" : ""}`}>
        Player 1
      </div>
      <div className={`player2${activePlayer === 1 ? " active" : ""}`}>
        Player 2
      </div>
    </div>
  );
}

export default PlayerStatus;
