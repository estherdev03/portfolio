import Link from "next/link";
import NavLink from "./NavLink";
import { IoNewspaperOutline } from "react-icons/io5";

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
  return (
    <div className="flex items-center justify-between h-18 px-4 border-b border-neutral-800/80 fixed left-0 top-0 z-100 w-full bg-neutral-900/90 ">
      <Link className="flex items-center cursor-pointer" href="/">
        <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
          ET
        </div>
        <div className="w-fit text-white ml-2 font-semibold text-md">
          Esther Tran
        </div>
      </Link>
      <div className="w-1/2 text-white flex items-center justify-center gap-1">
        {NavLinks.map(({ name, href }) => {
          return <NavLink key={name} name={name} href={href} />;
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
