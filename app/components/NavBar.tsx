"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import { IoNewspaperOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const NavLinks = [
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Education",
    href: "/#education",
  },

  {
    name: "Skills",
    href: "/#skills",
  },
  {
    name: "Projects",
    href: "/#projects",
  },
  {
    name: "Principles",
    href: "/#principles",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
];

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // Bind handleScroll
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // define options and callback for observer
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", //middle 20% of the viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    // section id to watch
    const sections = [
      "about",
      "education",
      "skills",
      "projects",
      "principles",
      "contact",
    ];

    // initiate the observer
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // register section with observer
    sections.forEach((section_id) => {
      const el = document.getElementById(section_id);
      if (el) observer.observe(el);
    });

    // clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex items-center justify-between h-18 px-4 border-b border-neutral-800/80 fixed left-0 top-0 z-100 w-full bg-neutral-900/90 ">
      <Link className="flex items-center cursor-pointer" href="/#about">
        <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
          ET
        </div>
        <div className="w-fit text-white ml-2 font-semibold text-md">
          Esther Tran
        </div>
      </Link>
      <div className="w-1/2 text-white flex items-center justify-center gap-2">
        {NavLinks.map(({ name, href }) => {
          return (
            <NavLink
              key={name}
              name={name}
              href={href}
              isActive={name.toUpperCase() == activeSection.toUpperCase()}
            />
          );
        })}
      </div>
      <div className="cursor-pointer">
        <div className="bg-white text-black px-4 py-1.5 rounded-lg flex items-center gap-2 text-sm">
          <IoNewspaperOutline className="text-lg" />
          Resume
        </div>
      </div>
    </div>
  );
};
export default NavBar;
