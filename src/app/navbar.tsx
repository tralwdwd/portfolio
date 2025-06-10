"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Url } from "next/dist/shared/lib/router/router";

interface INavbarProps {}

const navItems = [
  {
    id: "home",
    label: "Home",
    href: "/",
  },
  {
    id: "about",
    label: "About",
    href: "about",
  },
];

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  const pathname = usePathname();
  const isActive = (path: Url) => {
    const pathStr = typeof path === "string" ? path : path.toString();
    return pathname == "/" ? pathname === pathStr : pathname.slice(1) === pathStr;
  };

  return (
    <nav className="pb-4 pt-4 flex justify-between items-center bg-[whitesmoke] dark:bg-stone-800 fixed top-0 z-10 w-full min-w-full">
      <Link
        href="/"
        className="text-lg md:text-3xl font-bold text-spotify-green ml-4 mt-2"
      >
        tralwdwd
      </Link>
    </nav>
  );
};

export default Navbar;
