import React, { FunctionComponent } from 'react';

const pjson = require('../../../package.json');

const Footer: FunctionComponent = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="max-w-full mx-auto md:max-w-[80%] lg:max-w-[70%]">
      <span>
        Created with <span> ♥ </span> by{' '}
        <a href="https://www.techhive.io" target="_blank">
          TechHive.IO
        </a>
        {' ' + year} - Version {pjson.version}
      </span>
    </footer>
  );
};

export default Footer;
