import type { BundledLanguage } from 'shiki';
import { codeToHtml } from 'shiki';

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
    a: ({
      children,
      ...props
    }: Props & React.HTMLAttributes<HTMLAnchorElement>) => (
      <a {...props} className="text-green-600 underline">
        {children}
      </a>
    ),
    code: (props: { children: string; className: string }) => {
      const [, lang] = props.className.split('-');

      return (
        <CodeBlock lang={lang as BundledLanguage}>{props.children}</CodeBlock>
      );
    },
    ...components,
  };
}

async function CodeBlock(props: { children: string; lang: BundledLanguage }) {
  const out = await codeToHtml(props.children, {
    lang: props.lang,
    theme: 'github-dark',
  });

  return <div dangerouslySetInnerHTML={{ __html: out }} className="mb-5" />;
}
