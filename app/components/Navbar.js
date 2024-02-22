"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../img/logo.png";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

// import FaTimes from "./x-icon.svg";
// import FiMenu from "./menu-icon.svg";

export default function Navbar() {
  const [menuSet, setMenuSet] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuSet(!menuSet);
  };

  const closeMenu = () => {
    setMenuSet(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuSet(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <nav className="max-w-screen-2xl mx-auto flex justify-between items-center mt-4 md:mt-7 lg:mt-10 flex-wrap w-full">
        <div
          className={`flex gap-7 lg:gap-10 text-sm lg:text-base ${
            menuSet ? "mx-0" : "mx-auto md:mx-0"
          }`}
        >
          <Link href="/" className="w-[120px] lg:w-auto ">
            <Image
              src={Logo}
              alt="Jobnow logo"
              width={160}
              loading="eager"
              className="hover:opacity-75"
            />
          </Link>

          <div
            className={`${
              menuSet
                ? " absolute bg-white md:relative top-0 left-0 pl-5 sm:pl-8  z-10 pt-5 sm:pt-9  h-screen"
                : "hidden"
            } w-full md:flex md:items-center md:w-auto`}
          >
            <ul
              className="md:flex  
             md:justify-between gap-6 lg:gap-12 space-y-4 md:space-y-0"
            >
              <li>
                <Link
                  href="/"
                  onClick={closeMenu}
                  className={`block font-bold  ${
                    pathname === "/" ? "underline" : ""
                  }`}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/job"
                  onClick={closeMenu}
                  className={`block font-bold  ${
                    pathname === "/projects" ? "underline" : ""
                  }`}
                >
                  Job
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutus"
                  onClick={closeMenu}
                  className={`block font-bold  ${
                    pathname === "/projects" ? "underline" : ""
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className={`block font-bold  ${
                    pathname === "/tickets" ? "underline" : ""
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li className="md:hidden">
                <Link
                  href="/signin"
                  onClick={closeMenu}
                  className={`block font-bold   ${
                    pathname === "/projects" ? "underline" : ""
                  }`}
                >
                  Sign In
                </Link>
              </li>
              <li className="md:hidden">
                <Link
                  href="/createaccount"
                  onClick={closeMenu}
                  className={`font-bold text-black flex gap-2 items-center ${
                    pathname === "/createaccount" ? "underline" : ""
                  }`}
                >
                  <span className="flex gap-2 bg-gray-600 px-3 py-2 rounded-xl">
                    <img
                      src="/assets/sign_up.svg"
                      alt="Sign up SVG"
                      className="transform -rotate-90"
                    />
                    Create Account
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 lg:gap-12 text-sm lg:text-base">
          <Link
            href="/signin"
            onClick={closeMenu}
            className={`block font-bold   ${
              pathname === "/projects" ? "underline" : ""
            }`}
          >
            Sign in
          </Link>
          <Link
            href="/createaccount"
            onClick={closeMenu}
            className={` font-bold text-black flex gap-2 bg-gray-600 px-3 py-2 rounded-xl  ${
              pathname === "/projects" ? "underline" : ""
            }`}
          >
            <img
              src="/assets/sign_up.svg"
              alt="Sign up SVG"
              className="transform w-6 -rotate-90"
            />
            Create Account
          </Link>
        </div>
      </nav>
      {menuSet ? (
        <button
          className="md:hidden absolute top-3 sm:top-7 right-5 text-black cursor-pointer  z-20  text-3xl p-0 font-bold"
          onClick={toggleMenu}
        >
          ✕
        </button>
      ) : (
        <button
          className="md:hidden absolute top-3 right-5 sm:right-8 text-black cursor-pointer text-3xl p-0 font-bold"
          onClick={toggleMenu}
        >
          ☰
        </button>
      )}
    </div>
  );
}
