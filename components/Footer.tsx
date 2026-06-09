import Link from './Link'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 pt-8 pb-8 dark:border-gray-800">
      <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
        {/* Left Side: Brand Name, Copyright, and Dynamic Tagline */}
        <div className="flex flex-col items-center space-y-1 md:items-start">
          <div className="flex items-center space-x-2 text-sm font-bold tracking-wide text-gray-900 dark:text-gray-100">
            <Link href="/" className="hover:text-primary-500 dark:hover:text-primary-400">
              {siteMetadata.title}
            </Link>
            <span className="text-gray-400 dark:text-gray-600">•</span>
            <span className="font-normal text-gray-500 dark:text-gray-400">
              {`© ${new Date().getFullYear()}`}
            </span>
          </div>
          <p className="max-w-sm text-center text-xs text-gray-400 md:text-left dark:text-gray-500">
            Exploring artificial intelligence, modern engineering, and digital systems.
          </p>
        </div>

        {/* Right Side: Discrete Footer Navigation Links */}
        <div className="flex space-x-6 text-sm font-medium text-gray-500 dark:text-gray-400">
          <Link href="/" className="transition-colors hover:text-gray-900 dark:hover:text-white">
            Home
          </Link>
          <Link
            href="/blog"
            className="transition-colors hover:text-gray-900 dark:hover:text-white"
          >
            Articles
          </Link>
          <Link
            href="/privacy-policy"
            className="transition-colors hover:text-gray-900 dark:hover:text-white"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
