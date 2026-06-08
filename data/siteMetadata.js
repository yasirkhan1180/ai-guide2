/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'AI Guide',
  author: 'Muhammad Yasir Khan',
  headerTitle: 'AI Guide',
  description: 'A minimalist guide to artificial intelligence, development, and digital innovation.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.ai-guide.site/',
  siteRepo: 'https://github.com/yasirkhan1180/ai-guide2',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`, // Fixed: Removed /public prefix
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  email: 'contact@ai-guide.site',
  github: 'https://github.com/yasirkhan1180', // Updated with your actual profile
  x: '', // Cleared so placeholder icons don't show as broken on your site
  facebook: '',
  youtube: '',
  linkedin: 'https://www.linkedin.com',
  threads: '',
  instagram: '',
  medium: '',
  bluesky: '',
  locale: 'en-US',
  stickyNav: false,
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, 
    },
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus', 
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', 
      reactions: '1', 
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar', 
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, 
    },
  },
}

module.exports = siteMetadata