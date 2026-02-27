'use client';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Watchsite</h1>
        <p className="text-xl text-gray-600 mb-8">
          A Next.js application deployed on GitHub Pages
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6 max-w-md">
          <h2 className="text-lg font-semibold mb-2">Deployment Info</h2>
          <p className="text-sm text-gray-700">
            This site is built with Next.js and deployed as a static site on GitHub Pages.
          </p>
        </div>
        <a
          href="https://github.com/studymedcine-afk/watchsite"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          View on GitHub
        </a>
      </div>
    </main>
  );
}
