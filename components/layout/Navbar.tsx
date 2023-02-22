import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex h-16 flex-row items-center justify-between border-b border-slate-800 px-6 lg:px-8">
      <div>
        <h1 className="text-xl font-bold text-white">Weather App</h1>
      </div>
      <div>
        <Link
          href="/"
          className="underline decoration-blue-800 decoration-2 underline-offset-4 transition-all duration-200 hover:text-blue-800"
        >
          Home
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
