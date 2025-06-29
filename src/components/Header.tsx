import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-center items-center">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/serviceLogo.svg"
            alt="Manabo Logo"
            width={200}
            height={80}
            className="h-10 w-auto"
            priority
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
