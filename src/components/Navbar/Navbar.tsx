import React, { useState } from 'react';
import { Menu } from '../Menu';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Menu toggle={toggle} />
    </>
  );
};

export default Navbar;
