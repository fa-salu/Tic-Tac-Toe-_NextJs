"use client";

import { useState } from "react";

export default function TicTacToe() {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [xMoveTurn, setXMoveTurn] = useState<boolean>(false);
  const [winner, setWinner] = useState<string | null>(null);

  const checkWinMatch = () => {
    const winMatch = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of winMatch) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        console.log("object", winner);
        return board[a];
      }
    }
    if (!board.includes("")) {
      setWinner("draw");
    }
  };

  const handleClick = (index: number) => {
    if (board[index]) return;
    const newBoard = [...board];
    newBoard[index] = xMoveTurn ? "X" : "O";
    setBoard(newBoard);
    setXMoveTurn(!xMoveTurn);
    checkWinMatch();
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="text-2xl mb-4">Tic Tac Toe</h1>
      <div className="grid grid-cols-3 gap-5">
        {board.map((box, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="w-24 h-24 text-2xl font-bold border-2 border-gray-900 rounded"
          >
            {box}
          </button>
        ))}
        {winner && (
          <div className="text-xl">
            {winner === "draw" ? "it's draw" : `${winner} wins!`}
          </div>
        )}
      </div>
    </div>
  );
}
