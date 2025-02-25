import fs from 'fs';
import { MDXModule } from 'mdx/types';
import Link from 'next/link';
import { join } from 'path';
import { Typography } from './_components/Typography';

export default async function Home() {
  const postsDirectory = join(process.cwd(), 'app', 'blog', '[slug]');
  const slugs = fs
    .readdirSync(postsDirectory)
    .filter((slug) => !slug.endsWith('.tsx'));

  const posts: Array<
    MDXModule & {
      metadata: {
        date: string;
        title: string;
        description: string;
        slug: string;
      };
    }
  > = await Promise.all(
    slugs.map((slug) => import(`./blog/[slug]/${slug}/post.mdx`))
  );

  return (
    <div className="grid gap-12 md:gap-20">
      <div className="grid gap-2">
        <Typography variant="h1">
          Hello, I am Giuliano Varriale, an experienced frontend developer that
          loves to build great user experiences.
        </Typography>

        <Typography variant="p">
          Check more about myself on the{' '}
          <Link href="/about" className="text-green-600 underline">
            about page.
          </Link>
        </Typography>
      </div>

      <div className="grid gap-6 md:gap-8">
        <h2 className="text-3xl font-bold dark:text-zinc-100">
          my latest experiments
        </h2>

        <div className="grid gap-4">
          {[
            {
              title: 'giu_os',
              description: 'building a fake operational system on the web',
              url: 'https://google.com',
            },
            {
              title: 'a drawing app',
              description: 'a simple drawing app using canvas',
              url: 'https://google.com',
            },
            {
              title: 'my own slack',
              description: 'a slack clone using react and firebase',
              url: 'https://google.com',
            },
          ].map(({ title, description, url }) => (
            <div key={title} className="flex flex-col gap-1">
              <h3 className="text-2xl font-bold dark:text-zinc-100">
                <Link href={url} className="underline" target="_blank">
                  {title}
                </Link>
              </h3>

              <p className="text-xl text-gray-700 dark:text-zinc-400">
                {description}
              </p>
            </div>
          ))}
        </div>

        <Link href="/experiments" className="text-xl text-green-600 underline">
          see all experiments
        </Link>
      </div>

      <div className="grid gap-6 md:gap-8">
        <h2 className="text-3xl font-bold dark:text-zinc-100">
          my latest blog posts
        </h2>

        <div className="grid gap-4">
          {posts.map(({ metadata }) => (
            <div key={metadata.slug} className="flex flex-col gap-1">
              <h3 className="text-2xl font-bold underline dark:text-zinc-100">
                <Link href={`/blog/${metadata.slug}`}>{metadata.title}</Link>
              </h3>

              <p className="text-xl text-gray-700 dark:text-zinc-400">
                {metadata.date}
              </p>
            </div>
          ))}
        </div>

        <Link href="/blog" className="text-xl text-green-600 underline">
          see all blog posts
        </Link>
      </div>
    </div>
  );
}
