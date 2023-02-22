import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex h-16 flex-row items-center justify-between border-b border-slate-800 px-6 lg:px-8">
      <div>
        <h1 className="text-xl font-bold text-white">Weather App</h1>
      </div>
      <div className="">
        <Link href="/">Home</Link>
      </div>
    </nav>
  );
}

export default Navbar;
