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
          loves the art of crafting digital products.
        </Typography>

        <Typography variant="p">
          Check more about myself on the{' '}
          <Link href="/about" className="text-green-600 underline">
            about page.
          </Link>
        </Typography>
      </div>

      <div className="grid gap-6 md:gap-8">
        <Typography variant="h2">my latest blog posts</Typography>

        <div className="grid gap-4">
          {posts.slice(0, 4).map(({ metadata }) => (
            <div key={metadata.slug} className="flex flex-col gap-1">
              <Typography variant="h3">
                <Link href={`/blog/${metadata.slug}`} className="underline">
                  {metadata.title}
                </Link>
              </Typography>

              <Typography variant="small">{metadata.date}</Typography>
            </div>
          ))}
        </div>

        {posts.length > 3 && (
          <Link href="/blog" className="text-xl text-green-600 underline">
            see all blog posts
          </Link>
        )}
      </div>
    </div>
  );
}
