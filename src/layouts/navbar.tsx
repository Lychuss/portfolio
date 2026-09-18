"use client";
import { useState } from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "Home",
      link: "mainPage"
    },
    {
      name: "Projects",
      link: "projectsPage",
      count: " [4]"
    },
    {
      name: "Services",
      link: "servicePage",
      count: " [7]"
    },
    {
      name: "Experiences",
      link: "experiencePage",
      count: " [4]"
    },
    {
      name: "Contact",
      link: "contactPage"
    }
  ];

  return (
    <>
    <nav className="navbar w-full flex justify-between items-center md:px-5">

      <div className="flex items-center py-[1em] px-[1em]">
        <div className="flex items-center gap-2 border border-gray-300 shadow-md rounded-full px-[0.5em] py-[0.2em]">
          <div className="rounded-full w-[10px] h-[10px] bg-green-400"></div>
          <h1 className="font-bold text-[0.6em]">
            Available for New Project
          </h1>
        </div>
      </div>

      <button onClick={() => setOpen(!open)} className="burger md:hidden px-[1em] font-bold">
        {open ? "X" : "☰"}
      </button>

      <div className="hidden md:flex flex-row gap-7">
            {links.map((link, i) => (
              <a
                key={i}
                href={`#${link.link}`}
                className="block text-sm font-bold text-gray-700 hover:text-blue-500"
              >
                {link.name}<span className="text-gray-400">{link.count}</span>
              </a>
          ))}
      </div>
    </nav>
      <div
        className={`md:hidden border transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-y opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="space-y-2 flex flex-col items-center justify-center">
          {links.map((link, i) => (
            <a
              key={i}
              href={`#${link.link}`}
              className="block text-gray-700 hover:text-blue-500 border-b"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}