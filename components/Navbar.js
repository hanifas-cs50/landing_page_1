"use client"
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/LOGO-PT-MIS.png";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentPath = usePathname();
  return (
    <nav className="fixed top-0 z-50 w-full h-20 text-white md:bg-blue-950 overflow-hidden">
      <div className="max-w-screen-xl h-full px-4 flex justify-between items-center mx-auto">
        <Link href="/" className="relative grid place-content-center h-full w-48 ml-2">
          <span style={{ transform: "skew(-36deg)" }} className="block absolute inset-0 bg-white" aria-hidden="true"></span>
          <span className="relative">
            <Image
              className="w-36 -ml-2"
              src={logo}
              alt="logo"
              width={400}
              height={200}
              quality={50}
              priority="high"
              placeholder="blur"
            />
          </span>
        </Link>
        <div className="flex space-x-4 font-bold" id="nav-items-container">
          <Link href="/" className={`px-4 py-2 rounded border-2 transition-colors ${currentPath === "/" ? "border-yellow-500 text-yellow-500" : "border-blue-950 hover:border-yellow-500 hover:text-yellow-500"}`}>
            Home
          </Link>
          <Link href="/about" className={`px-4 py-2 rounded border-2 transition-colors ${currentPath === "/about" ? "border-yellow-500 text-yellow-500" : "border-blue-950 hover:border-yellow-500 hover:text-yellow-500"}`}>
            About
          </Link>
          <Link href="/services" className={`px-4 py-2 rounded border-2 transition-colors ${currentPath === "/services" ? "border-yellow-500 text-yellow-500" : "border-blue-950 hover:border-yellow-500 hover:text-yellow-500"}`}>
            Services
          </Link>
          <Link href="/projects" className={`px-4 py-2 rounded border-2 transition-colors ${currentPath === "/projects" ? "border-yellow-500 text-yellow-500" : "border-blue-950 hover:border-yellow-500 hover:text-yellow-500"}`}>
            Our Projects
          </Link>
          <Link href="/contact" className={`px-4 py-2 rounded border-2 transition-colors ${currentPath === "/contact" ? "border-yellow-500 text-yellow-500" : "border-blue-950 hover:border-yellow-500 hover:text-yellow-500"}`}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
};