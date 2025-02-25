import fs from 'fs';
import { join } from 'path';

export async function generateStaticParams() {
  const postsDirectory = join(process.cwd(), 'app', 'blog', '[slug]');

  const slugs = fs
    .readdirSync(postsDirectory)
    .filter((slug) => !slug.endsWith('.tsx'));

  return slugs.map((slug) => ({ slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Post } = await import(`./${slug}/post.mdx`);

  return (
    <div className="max-w-screen-sm mx-auto">
      <Post />
    </div>
  );
}
