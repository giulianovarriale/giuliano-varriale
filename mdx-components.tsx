import type { MDXComponents } from 'mdx/types';
import { Typography } from './app/_components/Typography';
import { List, ListItem } from './app/_components/List';

type Props = {
  children: React.ReactNode;
};

// This file is required to use @next/mdx in the `app` directory.
export function useMDXComponents(components: MDXComponents) {
  // Allows customizing built-in components, e.g. to add styling.
  return {
    h1: ({ children }: Props) => (
      <Typography variant="h1" className="mb-6">
        {children}
      </Typography>
    ),
    h2: ({ children }: Props) => (
      <Typography variant="h2" className="mb-3">
        {children}
      </Typography>
    ),
    h3: ({ children }: Props) => (
      <Typography variant="h3" className="mb-2">
        {children}
      </Typography>
    ),
    h4: ({ children }: Props) => (
      <Typography variant="h4" className="mb-1">
        {children}
      </Typography>
    ),
    h5: ({ children }: Props) => (
      <Typography variant="h5">{children}</Typography>
    ),
    p: ({ children }: Props) => (
      <Typography variant="p" className="mb-5">
        {children}
      </Typography>
    ),
    ul: ({ children }: Props) => <List>{children}</List>,
    li: ({ children }: Props) => <ListItem>{children}</ListItem>,
    ...components,
  };
}
