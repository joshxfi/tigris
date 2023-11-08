import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center py-12 text-sm">
      <h1 className="font-bold text-xl">tigris</h1>

      <div className="flex text-secondary-100">
        <ul className="lg:flex items-center space-x-20 hidden">
          <li>Home</li>
          <li>Council</li>
          <li>Contact</li>
          <li></li>
        </ul>

        <Link
          href="/merch"
          className="bg-secondary-200 px-6 py-3 rounded-md"
        >
          Browse Merch
        </Link>
      </div>
    </nav>
  );
}
