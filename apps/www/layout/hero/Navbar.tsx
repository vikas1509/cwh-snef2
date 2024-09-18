"use client"; // This is correct to ensure it's a client-side component
import { useState } from "react";
import { usePathname } from "next/navigation"; // Use usePathname for route checking
import Link from "next/link";
import { Button } from "@/components/ui/button";
import logo from "@/public/logo/BlackLogo.png"; // Your logo image path
import colorlogo from "@/public/logo/logo.png";
import Image from "next/image";
import { ModeToggle } from "@/components/Toggle";
import { useTheme } from "next-themes"; // Import useTheme

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme(); // Get current theme
  const pathname = usePathname(); // Get current pathname

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = ["Home", "Brand", "About", "Blog"];

  return (
    <nav className="h-16 my-4  flex items-center justify-between max-w-screen-xl mx-auto px-6">
      {/* Logo */}
      <div className="flex items-center text-foreground z-10000">
        <Link href="/">
          <Image
            src={theme === "dark" ? colorlogo : logo} // Conditionally render the logo based on the theme
            alt="Logo"
            className="flex items-center"
            width={127}
            height={38}
          />
        </Link>
      </div>

      {/* Centered Links */}
      <div className="hidden md:flex dark:bg-foreground bg-foreground py-2 p-2 rounded-full">
        {links.map((item, index) => {
          const isActive = pathname === (index === 0 ? "/" : `/${item.toLowerCase()}`);
          return (
            <Link
              key={item}
              href={index === 0 ? "/" : `/${item.toLowerCase()}`}
              className={`px-8 py-2 rounded-full ${
                isActive ? "bg-[#3E4926] font-bold text-secondary-foreground" : "text-navbtn hover:text-primary"
              }`}
            >
              {item}
            </Link>
          );
        })}
      </div>

      {/* Mode Toggle */}
      <div>
        <ModeToggle />
      </div>

      {/* Sign Up Button */}
      <div className="hidden md:flex">
        <Button className="hover:transparent transition-all dark:text-foreground">
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
        <div className="md:hidden fixed top-16 left-0 w-full bg-white py-4 shadow-lg flex flex-col items-center justify-center gap-4 z-50">
          {links.map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="block px-4 py-2 text-primary transition-colors text-foreground text-center w-full"
            >
              {item}
            </Link>
          ))}
          <Button className="mt-4 bg-primary text-primary-foreground">
            <Link href="/signup">Sign up free</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
