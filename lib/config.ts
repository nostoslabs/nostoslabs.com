/**
 * Site configuration - can be customized via environment variables
 */

export interface SiteConfig {
  user: {
    name: string
    title: string
    description: string
  }
  contact: {
    github: string
    linkedin: string
    twitter?: string
    email?: string
  }
  site: {
    title: string
    description: string
    chatUrl: string
  }
}

// Environment variables with fallbacks
const USER_NAME = process.env.NEXT_PUBLIC_USER_NAME || 'Nostos Labs'
const USER_TITLE = process.env.NEXT_PUBLIC_USER_TITLE || 'Technology Consulting'
const USER_DESCRIPTION = process.env.NEXT_PUBLIC_USER_DESCRIPTION || 
  "We are a forward-thinking technology consulting firm specializing in AI/ML solutions, data science & analytics, cloud architecture, and digital transformation. Our expertise spans machine learning model development, predictive analytics, data engineering pipelines, and intelligent automation systems that drive innovation and competitive advantage."

const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/nostoslabs'
const LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/company/nostos-labs'
const TWITTER_URL = process.env.NEXT_PUBLIC_TWITTER_URL || undefined
const EMAIL = process.env.NEXT_PUBLIC_EMAIL || 'contact@nostoslabs.com'

const SITE_TITLE = process.env.NEXT_PUBLIC_SITE_TITLE || `${USER_NAME} - ${USER_TITLE}`
const SITE_DESCRIPTION = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 
  `${USER_NAME} - Expert technology consulting for modern businesses`
const CHAT_URL = process.env.NEXT_PUBLIC_CHAT_URL || 'https://chat.nostoslabs.com'

export const siteConfig: SiteConfig = {
  user: {
    name: USER_NAME,
    title: USER_TITLE,
    description: USER_DESCRIPTION
  },
  contact: {
    github: GITHUB_URL,
    linkedin: LINKEDIN_URL,
    twitter: TWITTER_URL,
    email: EMAIL
  },
  site: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    chatUrl: CHAT_URL
  }
}

// Utility functions for easier imports
export const getUserName = () => siteConfig.user.name
export const getUserTitle = () => siteConfig.user.title  
export const getUserDescription = () => siteConfig.user.description
export const getSiteTitle = () => siteConfig.site.title
export const getSiteDescription = () => siteConfig.site.description

export default siteConfig