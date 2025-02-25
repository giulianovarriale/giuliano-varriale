import fs from 'fs';
import { join } from 'path';
import { Typography } from '../_components/Typography';
import { MDXModule } from 'mdx/types';

export default async function Page() {
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
    slugs.map((slug) => import(`./[slug]/${slug}/post.mdx`))
  );

  return (
    <div className="grid gap-10">
      {posts.map(({ metadata: post }) => (
        <div key={post.slug}>
          <Typography variant="small" className="mb-1">
            {post.date}
          </Typography>

          <Typography variant="h2">
            <a href={`/blog/${post.slug}`} className="underline">
              {post.title}
            </a>
          </Typography>

          <Typography variant="p">{post.description}</Typography>
        </div>
      ))}
    </div>
  );
}
