"use client";

import Link from "next/link";
import { toast } from "sonner";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center py-12 text-sm">
      <Link href="/" className="font-bold text-xl">
        tigris
      </Link>

      <div className="flex text-secondary-100">
        <ul className="lg:flex items-center space-x-20 hidden">
          <li><Link href='#about'>About</Link></li>
          <li><Link href='#departments'>Departments</Link></li>
          <li><Link href='#council'>Council</Link></li>
          <li></li>
        </ul>

        <button
          onClick={() => toast.info("Coming Soon!")}
          className="bg-secondary-200 px-6 py-3 rounded-md"
        >
          Browse Merch
        </button>
      </div>
    </nav>
  );
}
