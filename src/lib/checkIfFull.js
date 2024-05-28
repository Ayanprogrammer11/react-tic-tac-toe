export default function checkIfFull(gridBoard) {
  if (gridBoard.every((row) => row && row.every((column) => column)))
    return true;
  return false;
}
