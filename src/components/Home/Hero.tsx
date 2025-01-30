import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-screen flex flex-col items-center justify-evenly text-white">
      <Image
        src="/images/bg.jpg"
        alt="Background"
        fill
        quality={80}
        priority
        className="-z-10 object-cover"
      />

      <h1 className="text-4xl sm:text-6xl bg-gray-300 border border-black p-6 sm:p-10 rounded-xl font-extrabold z-10 drop-shadow-[4px_4px_10px_rgba(255,255,255,0.6)]">
        Tic Tac Toe
      </h1>

      <Link href={"/tic-tac-toe"}>
        <button className="px-8 py-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-xl shadow-2xl transform active:translate-y-1 hover:scale-105 transition-all duration-300 border border-white/30">
          Play Now
        </button>
      </Link>
    </div>
  );
}
