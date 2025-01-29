"use client";

import { useEffect, useState } from "react";

export default function TicTacToe() {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [xMoveTurn, setXMoveTurn] = useState<boolean>(false);
  const [winner, setWinner] = useState<string | null>(null);

  useEffect(() => {
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
        return;
      }
    }

    if (!board.includes("") && !winner) {
      setWinner("draw");
    }
  }, [board, winner]);

  const handleClick = (index: number) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = xMoveTurn ? "X" : "O";
    setBoard(newBoard);
    setXMoveTurn(!xMoveTurn);
  };

  const handlePlay = () => {
    setBoard(Array(9).fill(""));
    setWinner(null);
    setXMoveTurn(false);
  };

  return (
    <div className="flex flex-col h-screen items-center justify-evenly">
      <h1 className="text-4xl">Tic Tac Toe</h1>
      <div className="grid grid-cols-3 gap-5">
        {board.map((box, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="w-24 h-24 text-2xl font-bold border-2 border-gray-900 rounded animate-borderMove"
          >
            {box}
          </button>
        ))}
      </div>

      {winner && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-gray-900 text-4xl md:text-6xl font-bold  border-2 animate-borderMove px-10 py-6 rounded-lg shadow-lg">
            {winner === "draw" ? "It's a draw!" : `${winner} Wins!`}
          </div>
        </div>
      )}

      <button
        onClick={handlePlay}
        className="text-2xl z-20 text-black p-3 rounded-xl border border-white animate-borderMove bg-gray-100"
      >
        Play Again
      </button>
    </div>
  );
}
