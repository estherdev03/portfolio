interface ContainerProps extends React.ComponentPropsWithRef<"div"> {
  children: React.ReactNode;
}

const Container = ({ children, ...rest }: ContainerProps) => {
  return (
    <div
      {...rest}
      className="flex items-center justify-center pb-28 pt-16 border-b border-neutral-800/80"
    >
      {children}
    </div>
  );
};
export default Container;
