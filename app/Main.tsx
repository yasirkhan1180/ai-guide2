import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import FeaturedSlider from '@/components/FeaturedSlider'
import Image from '@/components/Image'

export default function Home({ posts }) {
  // 1. Isolate the top 3 newest articles exclusively for the Hero Slider
  const featuredArticles = posts.slice(0, 3)

  // 2. Extract ABSOLUTELY ALL remaining articles for the standard feed list
  const regularArticles = posts.slice(3)

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* Featured Slider Carousel Element */}
        <div className="pt-4 pb-8">
          <FeaturedSlider posts={featuredArticles} />
        </div>

        {/* Latest Articles Heading Wrapper */}
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Latest Articles
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>

        {/* Premium Thumbnail-Based Article Stream Grid */}
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {posts.length <= 3 && (
            <p className="py-12 text-center text-gray-500 dark:text-gray-400">
              No additional posts found.
            </p>
          )}
          {regularArticles.map((post) => {
            const { slug, date, title, summary, tags } = post
            const displayImage =
              post.images && post.images[0] ? post.images[0] : '/static/images/twitter-card.png'

            return (
              <li key={slug} className="py-8">
                <article className="flex flex-col gap-6 sm:flex-row sm:items-start md:gap-8">
                  {/* Left Side: Image Thumbnail Frame */}
                  <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-2xl shadow-sm sm:w-64 md:h-40">
                    <Link href={`/blog/${slug}`} className="h-full w-full">
                      <Image
                        src={displayImage}
                        alt={title}
                        className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
                        width={400}
                        height={250}
                      />
                    </Link>
                  </div>

                  {/* Right Side: Metadata Content Layout */}
                  <div className="flex flex-1 flex-col">
                    <time
                      dateTime={date}
                      className="text-sm font-medium text-gray-500 dark:text-gray-400"
                    >
                      {formatDate(date, siteMetadata.locale)}
                    </time>

                    <h2 className="mt-1 text-xl leading-snug font-bold tracking-tight text-gray-900 dark:text-gray-100">
                      <Link href={`/blog/${slug}`} className="hover:text-primary-500">
                        {title}
                      </Link>
                    </h2>

                    <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                      {summary}
                    </p>

                    {/* Pink Pill Badges Arrays */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-pink-500/10 px-3 py-0.5 text-xs font-bold tracking-wide text-pink-500 uppercase dark:bg-pink-500/20 dark:text-pink-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Navigation link to the full searchable archive grid view */}
      {posts.length > 3 && (
        <div className="flex justify-end pt-6 text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            View Blog Archive &rarr;
          </Link>
        </div>
      )}

      {/* Newsletter Capture Component Container */}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-8">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
