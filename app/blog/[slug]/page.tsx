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
