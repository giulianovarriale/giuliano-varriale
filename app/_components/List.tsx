type Props = {
  children: React.ReactNode;
};

export function List({ children }: Props) {
  return (
    <ul className="list-disc pl-4 dark:text-zinc-400 text-xl mb-5">
      {children}
    </ul>
  );
}

export function ListItem({ children }: Props) {
  return <li className="mb-3">{children}</li>;
}
