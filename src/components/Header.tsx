import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">GCP Study App</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/avator" className="hover:underline">Avator</Link>
            </li>
            {/* <li>
              <Link href="/lesson" className="hover:underline">Lesson</Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
