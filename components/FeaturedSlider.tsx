'use client'

import { useState } from 'react'
import Link from './Link'
import Image from './Image'

interface Post {
  slug: string
  date: string
  title: string
  summary?: string
  tags: string[]
  images?: string[]
}

interface FeaturedSliderProps {
  posts: Post[]
}

export default function FeaturedSlider({ posts }: FeaturedSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? posts.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === posts.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  if (!posts || posts.length === 0) return null

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Slider Viewport Track */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(calc(-${currentIndex * 80}% + 10%))` }}
      >
        {posts.map((post, index) => {
          const isActive = index === currentIndex
          const featuredImage =
            post.images && post.images[0] ? post.images[0] : '/static/images/twitter-card.png'
          const displayDate = new Date(post.date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })

          return (
            <div
              key={post.slug}
              className={`w-[80%] shrink-0 px-2 transition-all duration-500 md:px-4 ${
                isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-40 blur-[1px]'
              }`}
            >
              <div className="relative h-[280px] w-full overflow-hidden rounded-2xl bg-gray-900 shadow-lg sm:h-[340px] md:h-[380px]">
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={featuredImage}
                    alt={post.title}
                    className="h-full w-full object-cover object-center"
                    width={800}
                    height={450}
                  />
                  {/* Custom Graphic Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40" />
                </div>

                {/* Content Layout Frame */}
                <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-8">
                  {/* Top: Item Date */}
                  <span className="text-xs font-semibold text-gray-300 md:text-sm">
                    {displayDate}
                  </span>

                  {/* Middle: Title & Tags Row */}
                  <div className="space-y-2 md:space-y-3">
                    <h2 className="line-clamp-2 text-lg leading-tight font-bold text-white sm:text-2xl md:text-3xl">
                      <Link href={`/blog/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h2>

                    {/* Pink Badges Array Layout */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-pink-500/20 bg-pink-500/20 px-2 py-0.5 text-[10px] font-bold tracking-wide text-pink-400 uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Summary Text & Navigation Trigger */}
                  <div className="space-y-3 md:space-y-4">
                    {post.summary && (
                      <p className="line-clamp-2 max-w-2xl text-xs text-gray-300 sm:text-sm">
                        {post.summary}
                      </p>
                    )}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-xs font-bold text-gray-900 shadow-sm transition-colors hover:bg-gray-100 md:text-sm"
                    >
                      Read More &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Navigation Arrow Elements */}
      <button
        onClick={prevSlide}
        aria-label="Previous featured article"
        className="absolute top-1/2 left-2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50 sm:left-4 md:h-10 md:w-10"
      >
        <svg
          className="h-5 w-5 md:h-6 md:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next featured article"
        className="absolute top-1/2 right-2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50 sm:right-4 md:h-10 md:w-10"
      >
        <svg
          className="h-5 w-5 md:h-6 md:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Indicator Dots */}
      <div className="mt-4 flex justify-center gap-1.5">
        {posts.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? 'w-4 bg-gray-800 dark:bg-gray-200'
                : 'w-1.5 bg-gray-300 dark:bg-gray-600'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
