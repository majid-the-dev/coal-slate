"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div
      className={`${
        isScrolled ? "bg-white shadow-sm" : ""
      } fixed top-0 w-full flex items-center justify-between px-4 md:px-10 py-6 z-10`}
    >
      <Link href={"/"} className="text-xl font-bold">
        COAL SLATE
      </Link>
      <div className="hidden lg:flex items-center gap-16 text-[16px]">
        <Link href={"/"} className="font-semibold">
          Home
        </Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Projects</Link>
        <Link href={"/"}>Contact</Link>
      </div>
      <Link
        href={"/"}
        className="hero-gradient text-white text-sm lg:text-[16px] font-medium rounded-full px-7 py-1.5"
      >
        Blog
      </Link>
    </div>
  );
};

export default Navbar;
