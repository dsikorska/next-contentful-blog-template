import React, { FunctionComponent } from 'react';
import Link from 'next/link';

const Header: FunctionComponent = () => {
  return (
    <div className="max-w-full mx-auto md:max-w-[80%] lg:max-w-[70%]">
      <Link href="/">
        <img
          src="https://www.techhive.io/static/brand/logo-masterclass.svg"
          alt="logo"
        />
      </Link>

      <h3>TechHive.IO: NextJs Static Starter Kit.</h3>
    </div>
  );
};

export default Header;
