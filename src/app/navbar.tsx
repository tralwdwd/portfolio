"use client";

import Link from "next/link";
import React from "react";

const Navbar = () => {
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
