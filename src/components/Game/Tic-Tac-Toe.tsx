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
      <h1 className="text-4xl font-bold transform hover:translate-y-2 transition-all duration-300">
        <span className="text-red-500">Tic</span>{" "}
        <span className="text-green-500">Tac</span>{" "}
        <span className="text-blue-500">Toe</span>
      </h1>

      <div className="grid grid-cols-3 gap-5">
        {board.map((box, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`w-24 h-24 text-4xl font-bold border-2 border-gray-900 rounded animate-boxSlideIn flex items-center justify-center`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span
              className={`transition-all duration-300 ease-in-out ${
                box === "X"
                  ? "scale-150 text-red-600 animate-borderMove"
                  : box === "O"
                  ? "scale-150 text-green-600 animate-borderMove"
                  : ""
              }`}
            >
              {box}
            </span>
          </button>
        ))}
      </div>

      {winner && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-gray-900 text-4xl md:text-6xl font-bold border-2 animate-borderMove px-10 py-6 rounded-lg shadow-lg">
            {winner === "draw" ? "draw!" : `${winner} Wins!`}
          </div>
        </div>
      )}

      <button
        onClick={handlePlay}
        className="text-2xl z-20 text-black p-3 rounded-xl border border-white animate-borderMove bg-gray-100 shadow-2xl transform active:translate-y-1 hover:scale-105 transition-all duration-300"
      >
        Play Again
      </button>
    </div>
  );
}
