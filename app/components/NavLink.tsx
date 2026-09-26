import React from "react";

interface NavLinkProps extends React.ComponentPropsWithoutRef<"div"> {
  name: string;
  navigationHandler: ({ section_id }: { section_id: string }) => void;
  isActive?: boolean;
}

const NavLink = ({
  name,
  isActive,
  navigationHandler,
  ...rest
}: NavLinkProps) => {
  return (
    <div
      className={`hover:bg-neutral-800/90 hover: cursor-pointer w-fit h-fit px-4 py-1 rounded-lg ${isActive ? "bg-neutral-800/90 backdrop-blur-md " : ""}`}
      {...rest}
      onClick={() => {
        navigationHandler({ section_id: name.toLowerCase() });
      }}
    >
      {name}
    </div>
  );
};

export default NavLink;
