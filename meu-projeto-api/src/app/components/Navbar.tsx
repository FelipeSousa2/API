"use client"; // Necessário para componentes com interatividade no Next.js

import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center space-x-8 text-white">
        <li>
          <Link href="/" className="hover:text-indigo-500">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-indigo-500">
            Sobre
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-indigo-500">
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
