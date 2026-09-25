import Link from "next/link";

const NavLink = ({ name, href }: { name: string; href: string }) => {
  return (
    <Link
      className="hover:bg-neutral-900/90 backdrop-blur-md hover: cursor-pointer w-fit h-fit px-4 py-1 rounded-sm"
      href={href}
    >
      {name}
    </Link>
  );
};

export default NavLink;
