"use client";
import NavLink from "./NavLink";
import { IoNewspaperOutline } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { useEffect, useState } from "react";
import ResumeModal from "./ResumeModal";

const NavLinks = [
  "About",
  "Education",
  "Skills",
  "Projects",
  "Principles",
  "Contact",
];

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showResume, setShowResume] = useState(false);

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

  const navigationHandler = ({ section_id }: { section_id: string }) => {
    setIsMenuOpen(false);
    return document.getElementById(section_id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed left-0 top-0 z-30 w-full border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-17 max-w-290 items-center justify-between gap-4 px-[clamp(16px,4vw,32px)]">
        <div
          className="flex items-center cursor-pointer gap-2.5"
          onClick={() => {
            navigationHandler({ section_id: "about" });
          }}
        >
          <div className="w-9 h-9 bg-neutral-50 rounded-lg flex items-center justify-center text-neutral-950 text-sm font-semibold tracking-tight">
            ET
          </div>
          <div className="text-[15px] font-semibold tracking-tight text-neutral-50">
            Esther Tran
          </div>
        </div>
        <nav className="hidden lg:flex items-center gap-0.5">
          {NavLinks.map((name) => {
            return (
              <NavLink
                key={name}
                name={name}
                navigationHandler={navigationHandler}
                isActive={name.toUpperCase() == activeSection.toUpperCase()}
              />
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <div className="cursor-pointer" onClick={() => setShowResume(true)}>
            <div className="bg-neutral-50 text-neutral-950 px-3.5 py-1.75 rounded-lg flex items-center gap-2 text-sm font-medium hover:bg-neutral-200 transition-colors">
              <IoNewspaperOutline className="text-base" />
              Resume
            </div>
          </div>
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center text-neutral-50 text-xl rounded-lg border border-neutral-800 hover:bg-neutral-900 cursor-pointer"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <MdOutlineClose /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col gap-0.5 border-t border-neutral-800 bg-neutral-950 px-[clamp(16px,4vw,32px)] pt-2 pb-4">
          {NavLinks.map((name, index) => {
            return (
              <NavLink
                key={name}
                name={name}
                number={`0${index}`}
                navigationHandler={navigationHandler}
                isActive={name.toUpperCase() == activeSection.toUpperCase()}
              />
            );
          })}
        </div>
      )}
      {showResume && <ResumeModal closeModal={() => setShowResume(false)} />}
    </header>
  );
};
export default NavBar;
