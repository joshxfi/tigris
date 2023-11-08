import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center py-12">
      <h1 className="font-bold text-xl">tigris</h1>

      <div className="flex space-x-24 text-secondary-100">
        <ul className="lg:flex items-center space-x-24 hidden">
          <li>Home</li>
          <li>Council</li>
          <li>Contact</li>
          <li></li>
        </ul>

        <Link
          href="/merch"
          className="bg-secondary-200 px-6 py-3 rounded-md text-sm md:text-base"
        >
          Browse Merch
        </Link>
      </div>
    </nav>
  );
}
