import Link from "next/link";
import React from "react";

interface NavLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  name: string;
  href: string;
  isActive?: boolean;
}

const NavLink = ({ name, href, isActive, ...rest }: NavLinkProps) => {
  return (
    <Link
      className={`hover:bg-neutral-800/90 hover: cursor-pointer w-fit h-fit px-4 py-1 rounded-lg ${isActive ? "bg-neutral-800/90 backdrop-blur-md " : ""}`}
      href={href}
      {...rest}
    >
      {name}
    </Link>
  );
};

export default NavLink;
