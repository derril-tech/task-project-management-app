import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-between p-8 sm:p-20 font-sans bg-gray-50">
      {/* Header Section */}
      <header className="text-center py-4">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center sm:items-start gap-8 text-center sm:text-left max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome to Next.js with Tailwind CSS
        </h1>

        <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded font-mono">
              src/app/page.js
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            className="rounded-full border border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-gray-300 dark:border-gray-700 transition-colors flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-900 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="flex gap-6 flex-wrap items-center justify-center py-6">
        <a
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:underline"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/file.svg" alt="File icon" width={16} height={16} />
          Learn
        </a>
        <a
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:underline"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/window.svg" alt="Window icon" width={16} height={16} />
          Examples
        </a>
        <a
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:underline"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
