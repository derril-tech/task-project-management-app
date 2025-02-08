import "../styles/globals.css";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
        {/* Header Section */}
        <header className="w-full p-4 bg-white dark:bg-gray-800 shadow">
          <h1 className="text-xl font-bold text-center">
            Project Management App
          </h1>
        </header>

        {/* Main Content */}
        <main className="p-6">{children}</main>

        {/* Footer Section */}
        <footer className="w-full py-4 text-center text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Task Management App. All rights
          reserved.
        </footer>
      </body>
    </html>
  );
}
