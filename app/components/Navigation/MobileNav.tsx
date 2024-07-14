'use client';

import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

export default function MobileNav({ navLinks }: { navLinks: NavLinks }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="flex justify-center items-center lg:hidden ">
      <button onClick={toggleDrawer(true)} className="hover:text-primary transition-colors">
        <MenuIcon className="scale-150 " />
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <nav className="py-7 min-w-[max(16.5rem,40vw)]">
          <ul
            className="h-full  flex flex-col gap-1.5 items-start  w-fit mx-auto"
            onClick={toggleDrawer(false)}
          >
            <div className="self-center text-center flex gap-5 items-center mb-5">
              <li className="">
                <Link href={'/'} className="hover:text-primary font-medium self-center">
                  <LoginOutlinedIcon />
                  &nbsp;Sign in
                </Link>
              </li>
              <li className="">
                <Link
                  href={'/'}
                  className="w-32 h-12 grid place-content-center button-primary font-medium "
                >
                  Register
                </Link>
              </li>
            </div>

            {navLinks.map((link, idx) => (
              <li key={idx} className="ml-3">
                <Link
                  href={link.linkTo}
                  className={`hover:text-primary text-lg transition-colors ${
                    pathname === link.linkTo && 'text-primary'
                  }`}
                >
                  {link.linkToDisplay}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Drawer>
    </div>
  );
}
