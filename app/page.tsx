import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid gap-12 py-12 px-6">
      <div className="grid gap-2">
        <h1 className="text-3xl font-bold">
          Hello, I am Giuliano Varriale, an experienced frontend developer that
          loves to build great user experiences.
        </h1>

        <p className="text-xl text-gray-700">
          Check more about myself on the{' '}
          <Link href="/about" className="text-green-600 underline">
            about page.
          </Link>
        </p>
      </div>

      <div className="grid gap-3">
        <h2 className="text-3xl font-bold">my latest experiments</h2>

        <div className="grid gap-1">
          <h3 className="text-2xl font-bold">
            <Link href="/experiments/giu_os" className="underline">
              giu_os
            </Link>
          </h3>

          <p className="text-xl text-gray-700">
            building a fake operational system on the web
          </p>
        </div>

        <Link href="/experiments" className="text-xl text-green-600 underline">
          see all experiments
        </Link>
      </div>

      <div className="grid gap-3">
        <h2 className="text-3xl font-bold">my latest blog posts</h2>

        <div className="grid gap-1">
          <h3 className="text-2xl font-bold underline">
            <Link href="/blog/how-to-build-a-blog-using-nextjs">
              How to build a blog using Nextjs
            </Link>
          </h3>

          <p className="text-xl text-gray-700">05 jan 2025</p>
        </div>

        <Link href="/blog" className="text-xl text-green-600 underline">
          see all blog posts
        </Link>
      </div>
    </div>
  );
}
