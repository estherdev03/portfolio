import React from "react";

interface NavLinkProps extends React.ComponentPropsWithoutRef<"div"> {
  name: string;
  navigationHandler: ({ section_id }: { section_id: string }) => void;
  isActive?: boolean;
  // Shown on the right in the mobile menu
  number?: string;
}

const NavLink = ({
  name,
  isActive,
  navigationHandler,
  number,
  ...rest
}: NavLinkProps) => {
  return (
    <div
      className={`cursor-pointer rounded-lg transition-colors hover:text-neutral-50 ${
        number
          ? "flex items-center justify-between p-3 text-[15px]"
          : "px-3 py-1.5 text-sm"
      } ${isActive ? "bg-neutral-800/90 text-neutral-50" : "text-neutral-400"}`}
      {...rest}
      onClick={() => {
        navigationHandler({ section_id: name.toLowerCase() });
      }}
    >
      <span>{name}</span>
      {number && (
        <span className="font-mono text-xs text-neutral-500">{number}</span>
      )}
    </div>
  );
};

export default NavLink;
