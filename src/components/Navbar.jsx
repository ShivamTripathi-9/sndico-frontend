import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-semibold">Swaad 'N' Sip</h1>

      <ul className="flex gap-6">
        <li className="hover:text-yellow-400 cursor-pointer">Home</li>
        <li className="hover:text-yellow-400 cursor-pointer">Menu</li>
        <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}
