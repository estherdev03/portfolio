interface ContainerProps extends React.ComponentPropsWithoutRef<"section"> {
  children: React.ReactNode;
}

const Container = ({ children, ...rest }: ContainerProps) => {
  return (
    <section
      {...rest}
      className="border-b border-neutral-800/80 py-[clamp(56px,8vw,104px)] scroll-mt-17"
    >
      <div className="mx-auto w-full max-w-290 px-[clamp(16px,4vw,32px)] flex flex-col gap-8">
        {children}
      </div>
    </section>
  );
};
export default Container;
