"use client";

import Link from "next/link";
import Image from "next/image";
// Assuming Button component from Shadcn UI
import { useState } from "react"; // To control the mobile menu

// import logo from "../public/BlackLogo.png"; // Your logo image path
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full h-16 bg-background px-4 shadow-md flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2 text-foreground">
        <Link href="/">
          {/* <Image src={logo} alt="Logo" width={50} height={50}  /> */}
          Logo
        </Link>
      </div>

      {/* Centered Links */}
      <div className="hidden md:flex space-x-8">
        {['Home', 'Brand', 'About', 'Blog'].map((item, index) => (
          <Link
            key={item}
            href={index === 0 ? "/" : `/${item.toLowerCase()}`}
            className="text-foreground hover:text-primary transition-colors text-foreground"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Sign Up Button */}
      <div className="hidden md:flex">
        <Button className="bg-primary text-primary-foreground hover:bg-secondary transition-all text-foreground">
          <Link href="/signup">Sign up free</Link>
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background py-4 shadow-lg">
          {['Home', 'Brand', 'About', 'Blog'].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="block px-4 py-2 text-foreground hover:text-primary transition-colors text-foreground"
            >
              {item}
            </Link>
          ))}
          <Button className="block mx-auto mt-4  bg-primary text-primary-foreground">
            <Link href="/signup">Sign up free</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
