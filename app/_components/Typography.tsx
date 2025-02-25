type Props = {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'small';
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';
  className?: string;
};

const classesPerVariant = {
  h1: 'block text-4xl font-bold dark:text-zinc-100',
  h2: 'block text-3xl font-bold dark:text-zinc-100',
  h3: 'block text-2xl font-bold dark:text-zinc-100',
  h4: 'block text-xl font-bold dark:text-zinc-100',
  h5: 'block text-xl font-medium dark:text-zinc-100',
  p: 'block text-xl dark:text-zinc-400',
  small: 'block text-lg dark:text-zinc-400',
};

export function Typography({
  children,
  variant = 'p',
  component,
  className = '',
}: Props) {
  const Component = component ?? variant;

  return (
    <Component className={[classesPerVariant[variant], className].join(' ')}>
      {children}
    </Component>
  );
}
