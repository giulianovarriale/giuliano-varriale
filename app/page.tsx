import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid gap-12 md:gap-20">
      <div className="grid gap-2">
        <h1 className="text-3xl font-bold md:text-6xl dark:text-zinc-100">
          Hello, I am Giuliano Varriale, an experienced frontend developer that
          loves to build great user experiences.
        </h1>

        <p className="text-xl text-gray-700 dark:text-zinc-400">
          Check more about myself on the{' '}
          <Link href="/about" className="text-green-600 underline">
            about page.
          </Link>
        </p>
      </div>

      <div className="grid gap-6 md:gap-8">
        <h2 className="text-3xl font-bold dark:text-zinc-100">
          my latest experiments
        </h2>

        <div className="grid gap-4 md:grid-cols-3 md:gap-9">
          {[
            {
              title: 'giu_os',
              description: 'building a fake operational system on the web',
              url: '/experiments/giu_os',
            },
            {
              title: 'a drawing app',
              description: 'a simple drawing app using canvas',
              url: '/experiments/drawing-app',
            },
            {
              title: 'my own slack',
              description: 'a slack clone using react and firebase',
              url: '/experiments/my-own-slack',
            },
          ].map(({ title, description, url }) => (
            <div key={title} className="flex flex-col gap-1">
              <h3 className="text-2xl font-bold dark:text-zinc-100">
                <Link href={url} className="underline">
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

        <div className="grid gap-4 md:grid-cols-3 md:gap-9">
          {[
            {
              title: 'how to build a blog using nextjs',
              date: '05 jan 2025',
              url: '/blog/how-to-build-a-blog-using-nextjs',
            },
            {
              title: 'understanding the component lifecycle in react',
              date: '05 jan 2025',
              url: '/blog/understanding-the-component-lifecycle-in-react',
            },
            {
              title: 'how to use react hooks',
              date: '05 jan 2025',
              url: '/blog/how-to-use-react-hooks',
            },
          ].map(({ title, date, url }) => (
            <div key={title} className="flex flex-col gap-1">
              <h3 className="text-2xl font-bold underline dark:text-zinc-100">
                <Link href={url}>{title}</Link>
              </h3>

              <p className="text-xl text-gray-700 dark:text-zinc-400">{date}</p>
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
