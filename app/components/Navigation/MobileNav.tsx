'use client';

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';
import Link from 'next/link';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const navLinks = [
    {
      linkToDisplay: 'Home',
      linkTo: '#',
    },
    {
      linkToDisplay: 'About',
      linkTo: '#',
    },
    {
      linkToDisplay: 'Vehichle Models',
      linkTo: '#',
    },
    {
      linkToDisplay: 'Testimonials',
      linkTo: '#',
    },
    {
      linkToDisplay: 'Our Team',
      linkTo: '#',
    },
    {
      linkToDisplay: 'Contact',
      linkTo: '#',
    },
  ];

  return (
    <div className="flex justify-center items-center lg:hidden ">
      <button onClick={toggleDrawer(true)} className="hover:text-primary transition-colors">
        <MenuIcon className="scale-150 " />
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <nav className="py-10">
          <ul
            className="h-full  flex flex-col items-center w-[250px]"
            onClick={toggleDrawer(false)}
          >
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link href={link.linkTo}>{link.linkToDisplay}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Drawer>
    </div>
  );
}
